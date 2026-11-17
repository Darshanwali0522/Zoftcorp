import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { LogoWrapper } from "@/components/layout/logo-wrapper";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Our Offerings",
      links: [
        { label: "Cloud & Data FinOps", href: "/consulting/cloud-finops" },
        { label: "Performance Tuning", href: "/offerings/performance-tuning-delivery" },
        { label: "Resilience and Compliance", href: "/consulting/resilience-compliance" },
        { label: "DPDP Assessment", href: "/consulting/compliance-governance" },
        { label: "Specialized Managed Services", href: "/offerings/managed-dba-services" },
        { label: "Database Migrations and Transformations", href: "/offerings/database-migrations-and-transformations" },
        { label: "Data Engineering and Analytics", href: "/offerings/data-engineering-and-analytics" },
      ],
    },
    {
      title: "Insights",
      links: [
        { label: "Case Studies, White Papers & Blogs", href: "/insights/blogs" },
        { label: "Events & Meetups", href: "/insights/events" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Leadership", href: "/about-us/leadership" },
        { label: "Vision & Mission", href: "/about-us/vision-mission" },
        { label: "Partnerships", href: "/about-us/partnerships" },
        { label: "Careers", href: "/about-us/career" },
      ],
    },
  ];

  return (
    <footer className="bg-[#01153B] border-t border-slate-800 pt-16 pb-12 text-slate-300 font-sans">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Info & Registered Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <LogoWrapper size="lg" variant="footer" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-3">
              Cloud and Database Experts. Delivering enterprise-grade reliability with boutique consulting agility.
            </p>

            {/* Office & Contact Info */}
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200">
                Office Address
              </p>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic leading-relaxed text-xs">
                  Zoftcorp Innovations Private Limited,<br />
                  Bhive Workspace, M G Road (Near Trinity Metro Station),<br />
                  Mahalakshmi Chambers, 29,<br />
                  MG Road, next to Trinity Metro Station,<br />
                  Bengaluru, Karnataka 560001, India.
                </address>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 font-mono text-xs">
                <a
                  href="mailto:info@zoftcorp.com"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#00B3FF] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded"
                  aria-label="Send email to info@zoftcorp.com"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00B3FF] shrink-0" aria-hidden="true" />
                  <span>info@zoftcorp.com</span>
                </a>

                <a
                  href="tel:+919663426660"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#00B3FF] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded"
                  aria-label="Call Zoftcorp at +91 9663426660"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00B3FF] shrink-0" aria-hidden="true" />
                  <span>+91 9663426660</span>
                </a>

                <a
                  href="https://wa.me/919663426660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded"
                  aria-label="Chat with Zoftcorp on WhatsApp (opens in new tab)"
                >
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.808.484 3.525 1.328 5.016L2 22l5.086-1.32c1.445.789 3.094 1.234 4.828 1.234 5.535 0 10.031-4.496 10.031-10.031C22.063 6.496 17.566 2 12.031 2Zm0 18.25c-1.578 0-3.07-.422-4.375-1.156l-.312-.18-3.031.797.812-2.953-.2-.316A8.136 8.136 0 0 1 3.844 12.03c0-4.515 3.672-8.187 8.187-8.187 4.516 0 8.188 3.672 8.188 8.188 0 4.515-3.672 8.187-8.188 8.187Zm4.484-6.133c-.246-.125-1.453-.718-1.68-.8-.226-.082-.39-.125-.554.125-.164.246-.637.8-.781.965-.145.164-.289.184-.535.062-.246-.125-1.043-.383-1.988-1.226-.735-.657-1.23-1.469-1.375-1.715-.145-.246-.016-.379.106-.504.11-.11.246-.289.37-.434.12-.144.164-.246.246-.41.082-.164.04-.308-.02-.433-.063-.125-.555-1.336-.762-1.832-.2-.48-.406-.414-.555-.422h-.473c-.164 0-.434.063-.66.309-.227.246-.867.848-.867 2.066 0 1.219.887 2.399 1.012 2.563.125.164 1.746 2.664 4.23 3.738.59.254 1.05.406 1.41.52.594.191 1.137.164 1.566.1.477-.07 1.453-.594 1.66-1.168.207-.574.207-1.066.145-1.168-.063-.102-.227-.164-.473-.289Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#00B3FF] pt-1">
              <Link href="/" className="hover:text-white transition-colors">
                Zoftcorp Innovations Private Limited
              </Link>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                Connect With Us
              </p>
              <ul className="flex items-center gap-2.5" aria-label="Social media links">
                <li>
                <a
                  href="https://www.facebook.com/zoftcorpfb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Zoftcorp on Facebook"
                  className="w-10 h-10 rounded-lg bg-[#031E4D] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#00B3FF] hover:border-[#00B3FF] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2 touch-manipulation"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zoftcorp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Zoftcorp on Instagram"
                  className="w-10 h-10 rounded-lg bg-[#031E4D] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#00B3FF] hover:border-[#00B3FF] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2 touch-manipulation"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zoftcorp-consulting-services/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Zoftcorp on LinkedIn"
                  className="w-10 h-10 rounded-lg bg-[#031E4D] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#00B3FF] hover:border-[#00B3FF] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2 touch-manipulation"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/zoftcorptweet"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Zoftcorp on X"
                  className="w-10 h-10 rounded-lg bg-[#031E4D] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#00B3FF] hover:border-[#00B3FF] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2 touch-manipulation"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z" />
                  </svg>
                </a>
              </li>
            </ul>
            </div>
          </div>

          {/* Nav Links Columns */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-100">
                {section.title}
              </p>
              <ul className="space-y-1 text-xs sm:text-sm">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="inline-block py-1 hover:text-[#00B3FF] text-slate-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded px-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider variant="subtle" />

        {/* Bottom Copyright & Legal Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-6">
          <p>© 2026 Zoftcorp Innovations Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/about-us/partnerships"
              className="hover:text-[#00B3FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded px-0.5"
              aria-label="Technology Ecosystem Partnerships"
            >
              Technology Ecosystem Partnerships
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
