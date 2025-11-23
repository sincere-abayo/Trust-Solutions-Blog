"use client";

import { useEffect, useState, useCallback } from "react";
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
  recentMessages: Message[];
}

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  status: string;
  readingTime: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  featuredImage?: string;
  author: {
    username: string;
  };
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
  const [showReplyHistory, setShowReplyHistory] = useState(false);
  const [replyHistory, setReplyHistory] = useState<
    Array<{
      id: string;
      subject: string;
      replyText: string;
      sentBy: string;
      sentAt: string;
    }>
  >([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);
  const [analyticsPeriod, setAnalyticsPeriod] = useState("30"); // days
  const [topPages, setTopPages] = useState<{ path: string; views: number }[]>(
    []
  );
  const [loadingTopPages, setLoadingTopPages] = useState(false);
  const [filterType, setFilterType] = useState<"preset" | "month" | "custom">(
    "preset"
  );
  const [selectedMonth, setSelectedMonth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeTab, setActiveTab] = useState<"dashboard" | "articles">(
    "dashboard"
  );
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [articleForm, setArticleForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "business",
    featuredImage: "",
    readingTime: 5,
  });
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
      setTopPages(analyticsData.topPages || []);
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

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      alert("New password must be at least 8 characters long");
      return;
    }

    setChangingPassword(true);
    try {
      const response = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "admin",
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Password changed successfully!");
        setShowChangePassword(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert(data.error || "Failed to change password");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Failed to change password. Please try again.");
    } finally {
      setChangingPassword(false);
    }
  };

  // Blog management functions
  const fetchArticles = async () => {
    setLoadingArticles(true);
    try {
      const response = await fetch("/api/admin/articles");
      if (response.ok) {
        const data = await response.json();
        setArticles(data.articles || []);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoadingArticles(false);
    }
  };

  const handleSaveArticle = async () => {
    try {
      const url = editingArticle
        ? `/api/admin/articles/${editingArticle.id}`
        : "/api/admin/articles";

      const method = editingArticle ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articleForm),
      });

      if (response.ok) {
        alert(editingArticle ? "Article updated!" : "Article created!");
        setShowArticleModal(false);
        setEditingArticle(null);
        setArticleForm({
          title: "",
          excerpt: "",
          content: "",
          category: "business",
          featuredImage: "",
          readingTime: 5,
        });
        fetchArticles();
      } else {
        const data = await response.json();
        alert(data.error || "Failed to save article");
      }
    } catch (error) {
      console.error("Error saving article:", error);
      alert("Failed to save article");
    }
  };

  const handlePublishArticle = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "published" ? "draft" : "published";
    try {
      const response = await fetch(`/api/admin/articles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        alert(
          `Article ${newStatus === "published" ? "published" : "unpublished"}!`
        );
        fetchArticles();
      }
    } catch (error) {
      console.error("Error updating article status:", error);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      try {
        const response = await fetch(`/api/admin/articles/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Article deleted!");
          fetchArticles();
        }
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    }
  };

  useEffect(() => {
    if (activeTab === "articles") {
      fetchArticles();
    }
  }, [activeTab]);

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
    if (!selectedMessage || !replySubject || !replyText) {
      alert("Please fill in all fields");
      return;
    }

    setSendingReply(true);
    try {
      const response = await fetch("/api/admin/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messageId: selectedMessage.id,
          subject: replySubject,
          replyText,
          sentBy: "admin",
        }),
      });

      if (response.ok) {
        alert("Reply sent successfully!");
        setShowReplyModal(false);
        setReplySubject("");
        setReplyText("");
        setSelectedMessage(null);
        fetchData();
      } else {
        const error = await response.json();
        alert(`Failed to send reply: ${error.error}`);
      }
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply. Please try again.");
    } finally {
      setSendingReply(false);
    }
  };

  const openReplyModal = (message: Message) => {
    setSelectedMessage(message);
    setReplySubject(`Re: ${message.service} Inquiry`);
    setShowReplyModal(true);
  };

  const fetchReplyHistory = async (messageId: string) => {
    setLoadingHistory(true);
    try {
      const response = await fetch(`/api/admin/reply?messageId=${messageId}`);
      if (response.ok) {
        const data = await response.json();
        setReplyHistory(data.replies || []);
        setShowReplyHistory(true);
      } else {
        alert("Failed to load reply history");
      }
    } catch (error) {
      console.error("Error fetching reply history:", error);
      alert("Failed to load reply history");
    } finally {
      setLoadingHistory(false);
    }
  };

  const fetchTopPages = useCallback(async () => {
    setLoadingTopPages(true);
    try {
      let url = "/api/admin/analytics?";

      if (filterType === "preset") {
        url += `days=${analyticsPeriod}`;
      } else if (filterType === "month" && selectedMonth) {
        url += `month=${selectedMonth}`;
      } else if (filterType === "custom" && startDate && endDate) {
        url += `startDate=${startDate}&endDate=${endDate}`;
      } else {
        url += `days=${analyticsPeriod}`;
      }

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTopPages(data.topPages || []);
      }
    } catch (error) {
      console.error("Error fetching top pages:", error);
    } finally {
      setLoadingTopPages(false);
    }
  }, [analyticsPeriod, filterType, selectedMonth, startDate, endDate]);

  useEffect(() => {
    fetchTopPages();
  }, [fetchTopPages]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Image
                src="/logo/image.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">
                  Trust Solutions Company
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => setShowChangePassword(true)}
                className="px-3 py-2 sm:px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <span className="hidden sm:inline">Change Password</span>
                <span className="sm:hidden">Password</span>
              </button>
              <button
                onClick={handleLogout}
                className="px-3 py-2 sm:px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "dashboard"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "articles"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Blog Articles
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "dashboard" && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Messages</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {analytics?.totalMessages || 0}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">New Messages</p>
                    <p className="text-3xl font-bold text-green-600">
                      {analytics?.newMessages || 0}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Views Today</p>
                    <p className="text-3xl font-bold text-purple-600">
                      {analytics?.viewsToday || 0}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Views (7 Days)</p>
                    <p className="text-3xl font-bold text-orange-600">
                      {analytics?.viewsLast7Days || 0}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Messages List */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold text-gray-900">
                        Contact Messages
                      </h2>
                      <button
                        onClick={fetchData}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                      >
                        Refresh
                      </button>
                    </div>

                    {/* Status Filter */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Filter by Status
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["all", "new", "read", "replied"].map((status) => (
                          <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              statusFilter === status
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Service Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Filter by Service
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "all",
                          "General Inquiry",
                          "Business Consulting",
                          "IT Consulting",
                          "Real Estate",
                          "Event Planning",
                          "Digital Marketing",
                        ].map((service) => (
                          <button
                            key={service}
                            onClick={() => setServiceFilter(service)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              serviceFilter === service
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {service === "all" ? "All Services" : service}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                    {messages.length === 0 ? (
                      <div className="p-8 text-center text-gray-500">
                        No messages found
                      </div>
                    ) : (
                      messages.map((message) => (
                        <div
                          key={message.id}
                          className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => setSelectedMessage(message)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">
                                {message.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {message.email}
                              </p>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                message.status === "new"
                                  ? "bg-green-100 text-green-800"
                                  : message.status === "read"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {message.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Service:</span>{" "}
                            {message.service}
                          </p>
                          <p className="text-sm text-gray-700 line-clamp-2">
                            {message.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {formatDate(message.createdAt)}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Analytics Sidebar */}
              <div className="space-y-6">
                {/* Top Pages */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Top Pages
                    </h3>

                    {/* Filter Type Tabs */}
                    <div className="flex gap-2 mb-3">
                      <button
                        onClick={() => setFilterType("preset")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          filterType === "preset"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Quick
                      </button>
                      <button
                        onClick={() => setFilterType("month")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          filterType === "month"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Month
                      </button>
                      <button
                        onClick={() => setFilterType("custom")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          filterType === "custom"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Custom
                      </button>
                    </div>

                    {/* Preset Period Filter */}
                    {filterType === "preset" && (
                      <div className="flex flex-wrap gap-2">
                        {[
                          { label: "7 Days", value: "7" },
                          { label: "30 Days", value: "30" },
                          { label: "3 Months", value: "90" },
                          { label: "6 Months", value: "180" },
                          { label: "1 Year", value: "365" },
                        ].map((period) => (
                          <button
                            key={period.value}
                            onClick={() => setAnalyticsPeriod(period.value)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                              analyticsPeriod === period.value
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {period.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Month Selector */}
                    {filterType === "month" && (
                      <div>
                        <input
                          type="month"
                          value={selectedMonth}
                          onChange={(e) => setSelectedMonth(e.target.value)}
                          max={new Date().toISOString().slice(0, 7)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                      </div>
                    )}

                    {/* Custom Date Range */}
                    {filterType === "custom" && (
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Start Date
                          </label>
                          <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            max={new Date().toISOString().split("T")[0]}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            End Date
                          </label>
                          <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            max={new Date().toISOString().split("T")[0]}
                            min={startDate}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {loadingTopPages ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {topPages.length === 0 ? (
                        <p className="text-center text-gray-500 py-4">
                          No data for this period
                        </p>
                      ) : (
                        topPages.map((page, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded"
                          >
                            <div className="flex items-center flex-1 min-w-0">
                              <span className="text-xs font-medium text-gray-500 mr-3 w-6">
                                #{index + 1}
                              </span>
                              <span className="text-sm text-gray-700 truncate">
                                {page.path}
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-blue-600 ml-2">
                              {page.views}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>

                {/* Messages by Service */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Messages by Service
                  </h3>
                  <div className="space-y-3">
                    {analytics?.messagesByService.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-gray-700">
                          {item.service}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Blog Articles Tab */}
        {activeTab === "articles" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Blog Articles
              </h2>
              <button
                onClick={() => {
                  setEditingArticle(null);
                  setArticleForm({
                    title: "",
                    excerpt: "",
                    content: "",
                    category: "business",
                    featuredImage: "",
                    readingTime: 5,
                  });
                  setShowArticleModal(true);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
              >
                Create New Article
              </button>
            </div>

            {loadingArticles ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Article
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Created
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {articles.length === 0 ? (
                        <tr>
                          <td
                            colSpan={5}
                            className="px-6 py-12 text-center text-gray-500"
                          >
                            No articles yet. Create your first article!
                          </td>
                        </tr>
                      ) : (
                        articles.map((article) => (
                          <tr key={article.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {article.title}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                  {article.excerpt.substring(0, 100)}...
                                </div>
                                <div className="text-xs text-gray-400 mt-1">
                                  {article.readingTime} min read
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {article.category.replace("-", " ")}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  article.status === "published"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {article.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(article.createdAt)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                              <button
                                onClick={() => {
                                  setEditingArticle(article);
                                  setArticleForm({
                                    title: article.title,
                                    excerpt: article.excerpt,
                                    content: article.content,
                                    category: article.category,
                                    featuredImage: article.featuredImage || "",
                                    readingTime: article.readingTime,
                                  });
                                  setShowArticleModal(true);
                                }}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() =>
                                  handlePublishArticle(
                                    article.id,
                                    article.status
                                  )
                                }
                                className={`${
                                  article.status === "published"
                                    ? "text-yellow-600 hover:text-yellow-900"
                                    : "text-green-600 hover:text-green-900"
                                }`}
                              >
                                {article.status === "published"
                                  ? "Unpublish"
                                  : "Publish"}
                              </button>
                              <button
                                onClick={() => handleDeleteArticle(article.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && !showReplyModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900">
                  Message Details
                </h3>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <p className="text-gray-900">{selectedMessage.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <p className="text-gray-900">{selectedMessage.email}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Phone
                  </label>
                  <p className="text-gray-900">
                    {selectedMessage.phone || "N/A"}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Company
                  </label>
                  <p className="text-gray-900">
                    {selectedMessage.company || "N/A"}
                  </p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Service
                </label>
                <p className="text-gray-900">{selectedMessage.service}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Message
                </label>
                <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">
                  {selectedMessage.message}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Received
                </label>
                <p className="text-gray-900">
                  {formatDate(selectedMessage.createdAt)}
                </p>
              </div>

              {/* Reply Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button
                  onClick={() => openReplyModal(selectedMessage)}
                  className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Reply Email
                </button>

                {selectedMessage.status === "replied" && (
                  <button
                    onClick={() => fetchReplyHistory(selectedMessage.id)}
                    disabled={loadingHistory}
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors flex items-center justify-center disabled:bg-gray-400"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {loadingHistory ? "Loading..." : "View Reply History"}
                  </button>
                )}
              </div>

              {/* Status Actions */}
              <div className="pt-4 border-t border-gray-200">
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Update Status
                </label>
                <div className="flex space-x-2">
                  {["new", "read", "replied"].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        updateMessageStatus(selectedMessage.id, status);
                        setSelectedMessage(null);
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedMessage.status === status
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      {showReplyModal && selectedMessage && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Reply to {selectedMessage.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedMessage.email}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowReplyModal(false);
                    setReplySubject("");
                    setReplyText("");
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Original Message */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-medium text-gray-600 mb-2">
                  Original Message:
                </p>
                <p className="text-sm text-gray-700">
                  {selectedMessage.message}
                </p>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Subject *
                </label>
                <input
                  type="text"
                  value={replySubject}
                  onChange={(e) => setReplySubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter email subject"
                />
              </div>

              {/* Reply Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Reply *
                </label>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={10}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Type your reply here..."
                />
                <p className="text-xs text-gray-500 mt-2">
                  This message will be sent with professional branding and
                  formatting.
                </p>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={handleReply}
                  disabled={sendingReply || !replySubject || !replyText}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-semibold transition-colors"
                >
                  {sendingReply ? "Sending..." : "Send Reply"}
                </button>
                <button
                  onClick={() => {
                    setShowReplyModal(false);
                    setReplySubject("");
                    setReplyText("");
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reply History Modal */}
      {showReplyHistory && selectedMessage && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Reply History
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    All replies sent to {selectedMessage.name} (
                    {selectedMessage.email})
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowReplyHistory(false);
                    setReplyHistory([]);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              {replyHistory.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No replies found for this message
                </div>
              ) : (
                <div className="space-y-6">
                  {replyHistory.map((reply, index) => (
                    <div
                      key={reply.id}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {reply.subject}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Sent by{" "}
                            <span className="font-medium">{reply.sentBy}</span>{" "}
                            on {formatDate(reply.sentAt)}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          Reply #{replyHistory.length - index}
                        </span>
                      </div>

                      <div className="bg-white p-4 rounded border border-gray-200">
                        <p className="text-sm font-medium text-gray-600 mb-2">
                          Message:
                        </p>
                        <p className="text-gray-900 whitespace-pre-wrap">
                          {reply.replyText}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setShowReplyHistory(false);
                    setReplyHistory([]);
                  }}
                  className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Modal */}
      {showArticleModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900">
                  {editingArticle ? "Edit Article" : "Create New Article"}
                </h3>
                <button
                  onClick={() => {
                    setShowArticleModal(false);
                    setEditingArticle(null);
                    setArticleForm({
                      title: "",
                      excerpt: "",
                      content: "",
                      category: "business",
                      featuredImage: "",
                      readingTime: 5,
                    });
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={articleForm.title}
                  onChange={(e) =>
                    setArticleForm({ ...articleForm, title: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Article title"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={articleForm.category}
                    onChange={(e) =>
                      setArticleForm({
                        ...articleForm,
                        category: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="business">Business Strategy</option>
                    <option value="it-consulting">IT Solutions</option>
                    <option value="real-estate">Real Estate Insights</option>
                    <option value="events">Event Planning Tips</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reading Time (minutes) *
                  </label>
                  <input
                    type="number"
                    value={articleForm.readingTime}
                    onChange={(e) =>
                      setArticleForm({
                        ...articleForm,
                        readingTime: parseInt(e.target.value) || 5,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                    max="60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt *
                </label>
                <textarea
                  value={articleForm.excerpt}
                  onChange={(e) =>
                    setArticleForm({ ...articleForm, excerpt: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of the article"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  value={articleForm.featuredImage}
                  onChange={(e) =>
                    setArticleForm({
                      ...articleForm,
                      featuredImage: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Optional: Add a featured image URL (recommended size:
                  1200x630px)
                </p>
                {articleForm.featuredImage && (
                  <div className="mt-3">
                    <img
                      src={articleForm.featuredImage}
                      alt="Featured image preview"
                      className="w-full h-32 object-cover rounded-lg border"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  value={articleForm.content}
                  onChange={(e) =>
                    setArticleForm({ ...articleForm, content: e.target.value })
                  }
                  rows={15}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Article content (supports basic markdown formatting)"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Tip: Use # for headings, ## for subheadings, and - for bullet
                  points
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex space-x-3">
              <button
                onClick={handleSaveArticle}
                disabled={
                  !articleForm.title ||
                  !articleForm.excerpt ||
                  !articleForm.content
                }
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-semibold transition-colors"
              >
                {editingArticle ? "Update Article" : "Create Article"}
              </button>
              <button
                onClick={() => {
                  setShowArticleModal(false);
                  setEditingArticle(null);
                  setArticleForm({
                    title: "",
                    excerpt: "",
                    content: "",
                    category: "business",
                    featuredImage: "",
                    readingTime: 5,
                  });
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {showChangePassword && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Change Password
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Update your admin password
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowChangePassword(false);
                    setCurrentPassword("");
                    setNewPassword("");
                    setConfirmPassword("");
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password *
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter current password"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password *
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter new password (min 8 characters)"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password *
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Confirm new password"
                />
              </div>

              {/* Password Requirements */}
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs text-blue-800 font-medium mb-1">
                  Password Requirements:
                </p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• At least 8 characters long</li>
                  <li>
                    • Include numbers and special characters (recommended)
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={handleChangePassword}
                  disabled={
                    changingPassword ||
                    !currentPassword ||
                    !newPassword ||
                    !confirmPassword
                  }
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-semibold transition-colors"
                >
                  {changingPassword ? "Changing..." : "Change Password"}
                </button>
                <button
                  onClick={() => {
                    setShowChangePassword(false);
                    setCurrentPassword("");
                    setNewPassword("");
                    setConfirmPassword("");
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
