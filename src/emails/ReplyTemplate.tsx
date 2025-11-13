import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";

interface ReplyTemplateProps {
  customerName: string;
  customerMessage: string;
  replyText: string;
  service: string;
}

export const ReplyTemplate = ({
  customerName,
  customerMessage,
  replyText,
  service,
}: ReplyTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Response from Trust Solutions - {service}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>Trust Solutions</Heading>
            <Text style={headerSubtitle}>
              Whatever your challenge, we provide the solution
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={greeting}>Dear {customerName},</Heading>

            <Text style={paragraph}>
              Thank you for contacting Trust Solutions regarding{" "}
              <strong>{service}</strong>. We appreciate your inquiry and are
              pleased to provide you with the following response:
            </Text>

            {/* Reply Content */}
            <Section style={replyBox}>
              <Text style={replyLabel}>Our Response:</Text>
              <Text style={replyContent}>{replyText}</Text>
            </Section>

            {/* Original Message Reference */}
            <Section style={originalMessageBox}>
              <Text style={originalLabel}>Your Original Message:</Text>
              <Text style={originalContent}>{customerMessage}</Text>
            </Section>

            <Hr style={divider} />

            {/* Next Steps */}
            <Section style={nextStepsBox}>
              <Heading style={nextStepsTitle}>What&apos;s Next?</Heading>
              <Text style={paragraph}>
                • If you have any questions about our response, feel free to
                reply to this email
              </Text>
              <Text style={paragraph}>
                • Our team is available to schedule a consultation at your
                convenience
              </Text>
              <Text style={paragraph}>
                • We typically respond to follow-up inquiries within 24 hours
              </Text>
            </Section>

            <Hr style={divider} />

            {/* Contact Information */}
            <Section style={contactBox}>
              <Heading style={contactTitle}>Get in Touch</Heading>
              <Text style={contactInfo}>
                📞 <strong>Phone:</strong> 0722490045
              </Text>
              <Text style={contactInfo}>
                ✉️ <strong>Email:</strong>{" "}
                <Link href="mailto:Trustsolutions2025@gmail.com" style={link}>
                  Trustsolutions2025@gmail.com
                </Link>
              </Text>
              <Text style={contactInfo}>
                📍 <strong>Address:</strong> KG 16 Ave, Kigali City, Rwanda
              </Text>
              <Text style={contactInfo}>
                🕒 <strong>Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent by Trust Solutions Company in response to your
              inquiry.
            </Text>
            <Text style={footerText}>
              © {new Date().getFullYear()} Trust Solutions Company. All rights
              reserved.
            </Text>
            <Text style={footerText}>KG 16 Ave, Kigali City, Rwanda</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ReplyTemplate;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  background: "linear-gradient(135deg, #1A237E 0%, #FFA726 100%)",
  padding: "40px 30px",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0",
  padding: "0",
};

const headerSubtitle = {
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "16px",
  margin: "10px 0 0 0",
  padding: "0",
};

const content = {
  padding: "40px 30px",
};

const greeting = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#1A237E",
  margin: "0 0 20px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#333333",
  margin: "0 0 16px 0",
};

const replyBox = {
  backgroundColor: "#e3f2fd",
  borderLeft: "4px solid #FFA726",
  padding: "20px",
  margin: "30px 0",
  borderRadius: "5px",
};

const replyLabel = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#1A237E",
  margin: "0 0 10px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const replyContent = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#333333",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const originalMessageBox = {
  backgroundColor: "#f8f9fa",
  padding: "20px",
  margin: "20px 0",
  borderRadius: "5px",
  border: "1px solid #e0e0e0",
};

const originalLabel = {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#666666",
  margin: "0 0 10px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const originalContent = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#666666",
  margin: "0",
  fontStyle: "italic" as const,
};

const divider = {
  borderColor: "#e0e0e0",
  margin: "30px 0",
};

const nextStepsBox = {
  margin: "30px 0",
};

const nextStepsTitle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#1A237E",
  margin: "0 0 15px 0",
};

const contactBox = {
  backgroundColor: "#f8f9fa",
  padding: "25px",
  borderRadius: "8px",
  margin: "30px 0",
};

const contactTitle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#1A237E",
  margin: "0 0 15px 0",
};

const contactInfo = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#333333",
  margin: "8px 0",
};

const link = {
  color: "#FFA726",
  textDecoration: "none",
};

const footer = {
  backgroundColor: "#f8f9fa",
  padding: "30px",
  textAlign: "center" as const,
  borderTop: "1px solid #e0e0e0",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "20px",
  color: "#666666",
  margin: "5px 0",
};
