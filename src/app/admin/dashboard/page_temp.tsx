"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  status: string;
  createdAt: string;
}

interface Analytics {
  totalMessages: number;
  newMessages: number;
  totalViews: number;
  viewsLast7Days: number;
  viewsToday: number;
  topPages: { path: string; views: number }[];
  messagesByService: { service: string; count: number }[];
  recentMessages: any[];
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replySubject, setReplySubject] = useState("");
  const [replyText, setReplyText] = useState("");
  const [sendingReply, setSendingReply] = useState(false);
  const router = useRouter();

  const fetchData = async () => {
    try {
      setLoading(true);
      // Build query params
      const params = new URLSearchParams();
      if (statusFilter !== "all") params.append("status", statusFilter);
      if (serviceFilter !== "all") params.append("service", serviceFilter);
      const queryString = params.toString();

      const [messagesRes, analyticsRes] = await Promise.all([
        fetch(`/api/admin/messages${queryString ? `?${queryString}` : ""}`),
        fetch("/api/admin/analytics"),
      ]);

      if (messagesRes.status === 401 || analyticsRes.status === 401) {
        router.push("/admin/login");
        return;
      }

      const messagesData = await messagesRes.json();
      const analyticsData = await analyticsRes.json();

      setMessages(messagesData.messages || []);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, serviceFilter]);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  const updateMessageStatus = async (id: string, status: string) => {
    try {
      await fetch("/api/admin/messages", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      fetchData();
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  const handleReply = async () => {
