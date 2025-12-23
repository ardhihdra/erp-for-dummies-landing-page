import { industries } from "@/data/industries";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Hexagon,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  TrendingDown,
  Clock,
  Target,
  Package,
  Calculator,
  Calendar,
  Warehouse,
  BarChart3,
  Bell,
  RefreshCw,
  Trash2,
  Truck,
  Zap,
  Users,
  Globe,
  Tag,
  Gift,
  LayoutDashboard,
  DollarSign,
  FileText,
  Scissors,
} from "lucide-react";

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  const iconMap: { [key: string]: any } = {
    TrendingUp,
    TrendingDown,
    Clock,
    Target,
    Package,
    Calculator,
    Calendar,
    Warehouse,
    BarChart3,
    Bell,
    RefreshCw,
    Trash2,
    Truck,
    Zap,
    Users,
    Globe,
    Tag,
    Gift,
    LayoutDashboard,
    DollarSign,
    FileText,
    Scissors,
    CheckCircle2,
  };

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName] || Package;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <nav className="bg-amber-50/80 backdrop-blur-md border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali
          </Link>
        </div>
      </nav>

      <section className="relative py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            {industry.description}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-all shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </a>
            <a
              href="mailto:ardhi.rofi@kaizeni.xyz"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-amber-300 text-amber-800 font-semibold rounded-lg hover:border-amber-600 hover:text-amber-900 transition-all"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 -mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/50 rounded-2xl flex items-center justify-center">
                  {getIcon(industry.stats[0]?.icon || "Package")}
                </div>
                <p className="text-amber-700 font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industry.stats.slice(0, 4).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-700 mb-3">
                  {getIcon(stat.icon)}
                </div>
                <div className="text-3xl font-bold text-amber-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-amber-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Fitur Utama
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Solusi lengkap untuk {industry.name}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industry.benefits.slice(0, 6).map((benefit, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-xl bg-white/80 flex items-center justify-center text-amber-700">
                      {getIcon(benefit.icon)}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-amber-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Keunggulan Sistem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {industry.detailFeatures.slice(0, 8).map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-amber-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer id="about" className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center p-1.5 bg-amber-600 text-white rounded-lg">
                  <Hexagon className="h-5 w-5 fill-current" />
                </div>
                <span className="font-bold text-xl text-amber-100">ASaudagarPro</span>
              </div>
              <p className="text-amber-200 text-sm mb-6 leading-relaxed">
                Sistem ERP terpercaya untuk membantu bisnis Anda tumbuh lebih
                cepat dan efisien dengan solusi yang disesuaikan untuk industri
                Anda.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-100">Solutions</h3>
              <ul className="space-y-3 text-amber-200 text-sm">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Manfaat Aplikasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Pencatatan Bahan Baku
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Pencatatan Penjualan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Laporan Keuangan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    Industri
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-100">Company</h3>
              <ul className="space-y-3 text-amber-200 text-sm">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Testimoni
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="hover:text-white transition-colors"
                  >
                    Karir
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="hover:text-white transition-colors"
                  >
                    Partner
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-100">Support</h3>
              <ul className="space-y-4 text-amber-200 text-sm">
                <li>
                  <a
                    href="mailto:ardhi.rofi@kaizeni.xyz"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>ardhi.rofi@kaizeni.xyz</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+6281234567890"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>+62 812-3456-7890</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-400 mt-1" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Pusat Bantuan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-amber-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-amber-200 text-sm">
                © {new Date().getFullYear()} SaudagarPro. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-amber-200">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
