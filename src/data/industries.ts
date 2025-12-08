export interface Stat {
    label: string;
    value: string;
    description: string;
    icon: string;
}

export interface Benefit {
    title: string;
    description: string;
    icon: string;
}

export interface UseCase {
    title: string;
    scenario: string;
    solution: string;
    result: string;
}

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Comparison {
    before: string[];
    after: string[];
}

export interface Industry {
    id: string;
    name: string;
    slug: string;
    description: string;
    features: string[];
    detailFeatures: {
        title: string;
        description: string;
    }[];
    stats: Stat[];
    benefits: Benefit[];
    useCases: UseCase[];
    testimonials: Testimonial[];
    faqs: FAQ[];
    comparison: Comparison;
}

export const industries: Industry[] = [
    {
        id: "fashion",
        name: "Fashion Manufacture",
        slug: "fashion-manufacture",
        description: "Solusi ERP lengkap untuk industri manufaktur fashion, dari manajemen bahan baku hingga produksi dan distribusi.",
        features: [
            "Bill of Materials",
            "Production Planning",
            "Inventory Kain",
            "Costing Produksi",
            "Quality Control",
            "Tracking Order"
        ],
        detailFeatures: [
            {
                title: "Manajemen Bahan Baku Kain",
                description: "Kelola stok kain, aksesoris, dan material produksi dengan sistem inventory yang terintegrasi dan real-time."
            },
            {
                title: "Produksi per Batch",
                description: "Monitor setiap batch produksi dari cutting hingga finishing dengan tracking yang detail dan akurat."
            },
            {
                title: "Monitoring Biaya Produksi",
                description: "Pantau biaya produksi secara real-time untuk setiap produk dan batch produksi."
            },
            {
                title: "Laporan Laba Rugi",
                description: "Dapatkan laporan keuangan lengkap dan akurat untuk analisis profitabilitas bisnis fashion Anda."
            }
        ],
        stats: [
            {
                label: "Efisiensi Produksi",
                value: "85%",
                description: "Peningkatan efisiensi produksi",
                icon: "TrendingUp"
            },
            {
                label: "Pengurangan Waste",
                value: "40%",
                description: "Waste material berkurang drastis",
                icon: "Scissors"
            },
            {
                label: "Waktu Produksi",
                value: "60%",
                description: "Lebih cepat dari manual",
                icon: "Clock"
            },
            {
                label: "Akurasi Costing",
                value: "99%",
                description: "Perhitungan biaya akurat",
                icon: "Target"
            }
        ],
        benefits: [
            {
                title: "Real-time Inventory",
                description: "Pantau stok kain dan material secara real-time dari mana saja",
                icon: "Package"
            },
            {
                title: "Automated Costing",
                description: "Hitung biaya produksi otomatis untuk setiap produk",
                icon: "Calculator"
            },
            {
                title: "Quality Control",
                description: "Sistem QC terintegrasi untuk menjaga kualitas produk",
                icon: "CheckCircle2"
            },
            {
                title: "Production Planning",
                description: "Rencanakan produksi dengan akurat berdasarkan demand",
                icon: "Calendar"
            },
            {
                title: "Multi-warehouse",
                description: "Kelola multiple gudang dan lokasi produksi",
                icon: "Warehouse"
            },
            {
                title: "Reporting Dashboard",
                description: "Dashboard analytics lengkap untuk decision making",
                icon: "BarChart3"
            }
        ],
        useCases: [
            {
                title: "Produksi Batch Besar",
                scenario: "Brand fashion dengan order 10,000 pcs per bulan kesulitan tracking material dan biaya produksi",
                solution: "Implementasi sistem BOM dan batch tracking untuk monitor setiap tahap produksi",
                result: "Efisiensi meningkat 85%, waste berkurang 40%, dan profit margin naik 25%"
            },
            {
                title: "Multi-line Production",
                scenario: "Garment factory dengan 5 production line sulit koordinasi dan monitoring progress",
                solution: "Dashboard real-time untuk monitor semua line produksi dan automated scheduling",
                result: "Produktivitas naik 60%, delivery on-time 95%, dan customer satisfaction meningkat"
            },
            {
                title: "Custom Order Management",
                scenario: "Fashion house dengan banyak custom order kesulitan manage spec dan deadline",
                solution: "Sistem order tracking dengan custom specification dan automated reminder",
                result: "Zero missed deadline, customer retention 90%, dan repeat order naik 45%"
            }
        ],
        testimonials: [
            {
                name: "Budi Santoso",
                role: "Production Manager",
                company: "Fashionista Garment",
                content: "Sejak pakai Astiga ERP, produksi kami jauh lebih terorganisir. Tracking material jadi mudah dan waste berkurang drastis. ROI tercapai dalam 6 bulan!",
                rating: 5
            },
            {
                name: "Siti Nurhaliza",
                role: "Owner",
                company: "Batik Modern",
                content: "Sistem costing otomatis sangat membantu. Sekarang kami bisa hitung harga jual dengan akurat dan profit margin meningkat 30%.",
                rating: 5
            },
            {
                name: "Andi Wijaya",
                role: "CEO",
                company: "Textile Indonesia",
                content: "Dashboard real-time memudahkan monitoring 3 factory kami. Decision making jadi lebih cepat dan data-driven.",
                rating: 5
            }
        ],
        faqs: [
            {
                question: "Apakah sistem bisa handle multiple production line?",
                answer: "Ya, sistem kami dirancang untuk mengelola multiple production line dengan dashboard terpusat. Anda bisa monitor semua line secara real-time."
            },
            {
                question: "Bagaimana cara tracking waste material?",
                answer: "Sistem otomatis mencatat waste di setiap tahap produksi. Anda akan mendapat laporan detail waste per batch, per material, dan per production line."
            },
            {
                question: "Apakah bisa integrasi dengan mesin cutting?",
                answer: "Ya, kami support integrasi dengan berbagai mesin cutting otomatis untuk automated data capture."
            },
            {
                question: "Berapa lama waktu implementasi?",
                answer: "Implementasi standar memakan waktu 2-4 minggu, termasuk training dan data migration."
            },
            {
                question: "Apakah ada mobile app?",
                answer: "Ya, tersedia mobile app untuk iOS dan Android untuk monitoring produksi dari mana saja."
            },
            {
                question: "Bagaimana dengan support dan training?",
                answer: "Kami menyediakan training lengkap saat implementasi dan support 24/7 via WhatsApp, email, dan phone."
            }
        ],
        comparison: {
            before: [
                "Manual tracking dengan Excel dan kertas",
                "Sering terjadi kesalahan hitung biaya produksi",
                "Waste material tinggi (15-20%)",
                "Sulit monitor progress produksi real-time",
                "Laporan memakan waktu 3-5 hari",
                "Koordinasi antar departemen lambat"
            ],
            after: [
                "Automated tracking dengan sistem terintegrasi",
                "Costing akurat 99% dengan kalkulasi otomatis",
                "Waste berkurang drastis (5-8%)",
                "Real-time monitoring dari dashboard",
                "Laporan instant dengan 1 klik",
                "Koordinasi seamless dengan notifikasi otomatis"
            ]
        }
    },
    {
        id: "fnb",
        name: "F&B",
        slug: "fnb",
        description: "Sistem ERP khusus untuk bisnis Food & Beverage, mengelola resep, inventory, dan operasional restoran.",
        features: [
            "Recipe Management",
            "Inventory Bahan Baku",
            "Menu Costing",
            "POS Integration",
            "Waste Management",
            "Supplier Management"
        ],
        detailFeatures: [
            {
                title: "Manajemen Resep & Menu",
                description: "Kelola resep, porsi, dan kalkulasi harga menu dengan sistem yang terintegrasi."
            },
            {
                title: "Inventory Real-time",
                description: "Monitor stok bahan baku secara real-time dengan notifikasi otomatis untuk restock."
            },
            {
                title: "Analisis Food Cost",
                description: "Hitung food cost setiap menu dan optimalkan profitabilitas dengan data yang akurat."
            },
            {
                title: "Laporan Penjualan Harian",
                description: "Dapatkan laporan penjualan lengkap per shift, per menu, dan per outlet."
            }
        ],
        stats: [
            {
                label: "Food Cost Reduction",
                value: "28%",
                description: "Pengurangan food cost",
                icon: "TrendingDown"
            },
            {
                label: "Inventory Accuracy",
                value: "98%",
                description: "Akurasi stok bahan baku",
                icon: "Target"
            },
            {
                label: "Order Speed",
                value: "3x",
                description: "Lebih cepat proses order",
                icon: "Zap"
            },
            {
                label: "Profit Margin",
                value: "+35%",
                description: "Peningkatan profit margin",
                icon: "TrendingUp"
            }
        ],
        benefits: [
            {
                title: "Recipe Costing",
                description: "Hitung food cost setiap menu secara otomatis dan akurat",
                icon: "Calculator"
            },
            {
                title: "Smart Inventory",
                description: "Alert otomatis saat stok menipis dengan reorder point",
                icon: "Bell"
            },
            {
                title: "Multi-outlet Sync",
                description: "Sinkronisasi data real-time untuk semua cabang",
                icon: "RefreshCw"
            },
            {
                title: "Waste Tracking",
                description: "Monitor dan kurangi waste dengan tracking detail",
                icon: "Trash2"
            },
            {
                title: "Supplier Management",
                description: "Kelola supplier dan purchase order dengan mudah",
                icon: "Truck"
            },
            {
                title: "Sales Analytics",
                description: "Analisis penjualan per menu, per shift, per outlet",
                icon: "BarChart3"
            }
        ],
        useCases: [
            {
                title: "Chain Restaurant Management",
                scenario: "Restoran dengan 8 cabang kesulitan maintain konsistensi rasa dan kontrol food cost",
                solution: "Standardized recipe management dan centralized inventory control",
                result: "Food cost turun 28%, konsistensi rasa 95%, dan customer satisfaction naik"
            },
            {
                title: "Cloud Kitchen Operations",
                scenario: "Cloud kitchen dengan 15 brand virtual sulit manage inventory dan costing",
                solution: "Multi-brand recipe management dengan shared inventory tracking",
                result: "Efisiensi operasional 70%, waste berkurang 45%, profit margin naik 35%"
            },
            {
                title: "Cafe & Bakery",
                scenario: "Cafe dengan produksi in-house kesulitan hitung HPP dan manage expired date",
                solution: "Automated costing dan FIFO inventory management dengan expiry tracking",
                result: "Expired waste turun 80%, HPP akurat, dan profit margin optimal"
            }
        ],
        testimonials: [
            {
                name: "Chef Renata",
                role: "Head Chef",
                company: "Nusantara Kitchen",
                content: "Recipe management-nya luar biasa! Sekarang semua chef bisa akses resep standar dan food cost langsung terhitung otomatis.",
                rating: 5
            },
            {
                name: "David Tan",
                role: "Owner",
                company: "Kopi Kenangan",
                content: "Dengan 12 outlet, sistem ini sangat membantu. Inventory sync real-time dan laporan penjualan instant. Highly recommended!",
                rating: 5
            },
            {
                name: "Lisa Wong",
                role: "Operations Manager",
                company: "Bakery Delight",
                content: "Waste tracking membantu kami identifikasi masalah dan reduce waste 60%. ROI tercapai dalam 4 bulan!",
                rating: 5
            }
        ],
        faqs: [
            {
                question: "Apakah bisa integrasi dengan POS yang sudah ada?",
                answer: "Ya, kami support integrasi dengan berbagai sistem POS populer seperti Moka, Pawoon, dan lainnya."
            },
            {
                question: "Bagaimana cara handle recipe dengan variasi?",
                answer: "Sistem support recipe variants dan modifiers, sehingga Anda bisa manage berbagai variasi menu dengan mudah."
            },
            {
                question: "Apakah ada fitur untuk manage expired date?",
                answer: "Ya, sistem otomatis track expired date dan memberikan alert sebelum produk expired dengan FIFO management."
            },
            {
                question: "Bagaimana dengan multi-currency untuk supplier import?",
                answer: "Sistem support multi-currency dengan auto-update exchange rate untuk supplier internasional."
            },
            {
                question: "Apakah bisa custom report?",
                answer: "Ya, Anda bisa create custom report sesuai kebutuhan bisnis dengan report builder yang user-friendly."
            },
            {
                question: "Berapa user yang bisa akses sistem?",
                answer: "Unlimited users dengan role-based access control untuk security dan efficiency."
            }
        ],
        comparison: {
            before: [
                "Recipe manual di buku atau Excel",
                "Food cost tidak akurat dan sering berubah",
                "Stok opname manual 2-3 hari",
                "Waste tidak termonitor dengan baik",
                "Sulit maintain konsistensi antar outlet",
                "Laporan penjualan lambat dan tidak detail"
            ],
            after: [
                "Digital recipe dengan foto dan video tutorial",
                "Food cost otomatis dan selalu update",
                "Real-time inventory tracking",
                "Waste tracking detail per kategori",
                "Standardized recipe untuk semua outlet",
                "Real-time sales dashboard dengan drill-down"
            ]
        }
    },
    {
        id: "retail",
        name: "Retail",
        slug: "retail",
        description: "Platform ERP untuk bisnis retail modern, dari manajemen stok hingga omnichannel sales.",
        features: [
            "Multi-outlet Management",
            "Inventory Control",
            "POS System",
            "Customer Loyalty",
            "Sales Analytics",
            "Procurement"
        ],
        detailFeatures: [
            {
                title: "Manajemen Multi-outlet",
                description: "Kelola semua cabang toko dari satu dashboard terpusat dengan kontrol inventory antar outlet."
            },
            {
                title: "Sistem POS Terintegrasi",
                description: "Point of Sale yang terintegrasi langsung dengan inventory dan accounting."
            },
            {
                title: "Program Loyalitas Pelanggan",
                description: "Bangun customer loyalty dengan sistem poin, member, dan promosi yang fleksibel."
            },
            {
                title: "Laporan Penjualan & Stok",
                description: "Dashboard analytics lengkap untuk monitoring performa penjualan dan perputaran stok."
            }
        ],
        stats: [
            {
                label: "Sales Growth",
                value: "+45%",
                description: "Peningkatan penjualan",
                icon: "TrendingUp"
            },
            {
                label: "Stock Accuracy",
                value: "99.5%",
                description: "Akurasi inventory",
                icon: "Package"
            },
            {
                label: "Customer Retention",
                value: "78%",
                description: "Repeat customer rate",
                icon: "Users"
            },
            {
                label: "Checkout Speed",
                value: "2x",
                description: "Lebih cepat checkout",
                icon: "Zap"
            }
        ],
        benefits: [
            {
                title: "Omnichannel Ready",
                description: "Integrasi online dan offline store dengan inventory sync",
                icon: "Globe"
            },
            {
                title: "Smart Pricing",
                description: "Dynamic pricing dan promo management yang fleksibel",
                icon: "Tag"
            },
            {
                title: "Customer Insights",
                description: "Analisis perilaku customer untuk marketing yang efektif",
                icon: "Users"
            },
            {
                title: "Stock Transfer",
                description: "Transfer stok antar outlet dengan tracking lengkap",
                icon: "Truck"
            },
            {
                title: "Loyalty Program",
                description: "Program member dengan poin, tier, dan reward",
                icon: "Gift"
            },
            {
                title: "Real-time Reports",
                description: "Dashboard analytics untuk decision making cepat",
                icon: "BarChart3"
            }
        ],
        useCases: [
            {
                title: "Fashion Retail Chain",
                scenario: "Retail fashion dengan 15 toko kesulitan manage inventory dan stock transfer",
                solution: "Centralized inventory dengan automated stock transfer dan reorder point",
                result: "Stock accuracy 99.5%, out of stock turun 85%, sales naik 45%"
            },
            {
                title: "Electronics Store",
                scenario: "Toko elektronik dengan produk bergaransi sulit track warranty dan serial number",
                solution: "Serial number tracking terintegrasi dengan warranty management",
                result: "Zero warranty dispute, customer trust meningkat, repeat order 60%"
            },
            {
                title: "Beauty & Cosmetics",
                scenario: "Beauty store dengan loyalty program manual sulit track poin dan reward",
                solution: "Digital loyalty program dengan automated point calculation dan redemption",
                result: "Member aktif naik 120%, repeat purchase 78%, revenue naik 55%"
            }
        ],
        testimonials: [
            {
                name: "Amanda Putri",
                role: "Store Manager",
                company: "Fashion Hub",
                content: "Sistem POS-nya sangat user-friendly. Kasir baru bisa langsung pakai tanpa training lama. Stock sync antar outlet juga real-time!",
                rating: 5
            },
            {
                name: "Robert Chen",
                role: "Owner",
                company: "Tech Store",
                content: "Serial number tracking sangat membantu untuk produk elektronik. Warranty management jadi mudah dan customer puas.",
                rating: 5
            },
            {
                name: "Dewi Lestari",
                role: "Marketing Manager",
                company: "Beauty Corner",
                content: "Loyalty program digitalnya amazing! Customer engagement naik drastis dan repeat purchase meningkat 78%.",
                rating: 5
            }
        ],
        faqs: [
            {
                question: "Apakah bisa integrasi dengan e-commerce?",
                answer: "Ya, kami support integrasi dengan Tokopedia, Shopee, dan platform e-commerce lainnya dengan inventory sync otomatis."
            },
            {
                question: "Bagaimana cara handle return dan refund?",
                answer: "Sistem memiliki modul return management lengkap dengan tracking reason, refund process, dan inventory adjustment otomatis."
            },
            {
                question: "Apakah support barcode scanner?",
                answer: "Ya, support berbagai jenis barcode scanner dan bisa print barcode label langsung dari sistem."
            },
            {
                question: "Bagaimana dengan consignment product?",
                answer: "Ada modul khusus untuk consignment dengan tracking ownership, sales sharing, dan automated settlement."
            },
            {
                question: "Apakah bisa custom loyalty program?",
                answer: "Ya, loyalty program fully customizable dengan tier, point multiplier, birthday reward, dan berbagai rule lainnya."
            },
            {
                question: "Berapa lama setup untuk outlet baru?",
                answer: "Setup outlet baru hanya butuh 1-2 hari termasuk hardware installation dan training staff."
            }
        ],
        comparison: {
            before: [
                "Stock opname manual setiap bulan",
                "Sering terjadi selisih stok 5-10%",
                "Transfer stok antar outlet lambat",
                "Loyalty program manual dengan kartu fisik",
                "Laporan penjualan end of day",
                "Sulit track best seller dan slow moving"
            ],
            after: [
                "Real-time inventory tracking otomatis",
                "Stock accuracy 99.5% dengan cycle count",
                "Instant stock transfer dengan approval flow",
                "Digital loyalty dengan mobile app",
                "Real-time sales dashboard",
                "AI-powered sales forecasting dan recommendation"
            ]
        }
    },
    {
        id: "kontraktor",
        name: "Kontraktor",
        slug: "kontraktor",
        description: "ERP untuk bisnis konstruksi dan kontraktor, mengelola proyek, material, dan keuangan.",
        features: [
            "Project Management",
            "Material Tracking",
            "Budget Control",
            "Subcontractor Management",
            "Progress Monitoring",
            "Financial Reporting"
        ],
        detailFeatures: [
            {
                title: "Manajemen Proyek Konstruksi",
                description: "Kelola multiple proyek dengan timeline, budget, dan resource allocation yang terorganisir."
            },
            {
                title: "Tracking Material & Equipment",
                description: "Monitor penggunaan material dan equipment di setiap proyek secara real-time."
            },
            {
                title: "Kontrol Budget Proyek",
                description: "Pantau budget vs actual cost untuk setiap proyek dan cegah cost overrun."
            },
            {
                title: "Laporan Progress & Keuangan",
                description: "Laporan lengkap progress fisik dan keuangan untuk setiap proyek konstruksi."
            }
        ],
        stats: [
            {
                label: "On-time Delivery",
                value: "92%",
                description: "Proyek selesai tepat waktu",
                icon: "Clock"
            },
            {
                label: "Budget Accuracy",
                value: "95%",
                description: "Akurasi estimasi budget",
                icon: "Target"
            },
            {
                label: "Cost Reduction",
                value: "25%",
                description: "Pengurangan biaya operasional",
                icon: "TrendingDown"
            },
            {
                label: "Profit Margin",
                value: "+30%",
                description: "Peningkatan profit margin",
                icon: "TrendingUp"
            }
        ],
        benefits: [
            {
                title: "Project Dashboard",
                description: "Monitor semua proyek dari satu dashboard terpusat",
                icon: "LayoutDashboard"
            },
            {
                title: "Material Control",
                description: "Track penggunaan material per proyek dengan detail",
                icon: "Package"
            },
            {
                title: "Budget Monitoring",
                description: "Real-time budget vs actual dengan alert otomatis",
                icon: "DollarSign"
            },
            {
                title: "Document Management",
                description: "Kelola semua dokumen proyek secara digital",
                icon: "FileText"
            },
            {
                title: "Progress Tracking",
                description: "Monitor progress fisik dengan foto dan milestone",
                icon: "CheckCircle2"
            },
            {
                title: "Subcon Management",
                description: "Kelola subkontraktor dan payment schedule",
                icon: "Users"
            }
        ],
        useCases: [
            {
                title: "Multi-project Management",
                scenario: "Kontraktor dengan 10 proyek berjalan kesulitan monitor progress dan budget",
                solution: "Project dashboard dengan real-time tracking dan automated reporting",
                result: "On-time delivery 92%, budget accuracy 95%, client satisfaction tinggi"
            },
            {
                title: "Material Cost Control",
                scenario: "Proyek konstruksi sering over budget karena material waste dan theft",
                solution: "Material tracking dengan QR code dan automated stock reconciliation",
                result: "Material waste turun 40%, theft prevention, cost saving 25%"
            },
            {
                title: "Subcontractor Coordination",
                scenario: "Koordinasi dengan 15 subkontraktor sulit dan sering delay payment",
                solution: "Subcon portal dengan progress tracking dan automated payment schedule",
                result: "Koordinasi efisien, payment on-time, subcon satisfaction 90%"
            }
        ],
        testimonials: [
            {
                name: "Ir. Bambang Sutrisno",
                role: "Project Manager",
                company: "Mega Construction",
                content: "Dashboard project sangat membantu monitor 8 proyek sekaligus. Budget vs actual real-time, jadi bisa cepat ambil keputusan.",
                rating: 5
            },
            {
                name: "Hendra Gunawan",
                role: "Owner",
                company: "Bangun Jaya",
                content: "Material tracking dengan QR code genius! Material waste turun drastis dan theft prevention sangat efektif.",
                rating: 5
            },
            {
                name: "Susi Handayani",
                role: "Finance Manager",
                company: "Prima Kontraktor",
                content: "Financial reporting-nya lengkap banget. Cash flow projection akurat dan membantu planning yang lebih baik.",
                rating: 5
            }
        ],
        faqs: [
            {
                question: "Apakah bisa handle multiple project sekaligus?",
                answer: "Ya, sistem dirancang untuk mengelola unlimited projects dengan dashboard terpusat dan resource allocation yang optimal."
            },
            {
                question: "Bagaimana cara track material di lapangan?",
                answer: "Menggunakan QR code atau barcode untuk scan material masuk/keluar dengan mobile app untuk tim lapangan."
            },
            {
                question: "Apakah ada fitur untuk RAB (Rencana Anggaran Biaya)?",
                answer: "Ya, ada modul lengkap untuk create RAB dengan template, cost database, dan comparison dengan actual cost."
            },
            {
                question: "Bagaimana dengan progress payment ke subkon?",
                answer: "Ada automated payment schedule berdasarkan progress milestone dengan approval workflow."
            },
            {
                question: "Apakah bisa upload foto progress proyek?",
                answer: "Ya, bisa upload foto progress dengan geo-tagging dan timestamp untuk dokumentasi lengkap."
            },
            {
                question: "Bagaimana dengan document management?",
                answer: "Semua dokumen proyek (kontrak, gambar, surat, dll) bisa disimpan digital dengan version control dan access control."
            }
        ],
        comparison: {
            before: [
                "Manual tracking dengan Excel dan WhatsApp",
                "Sering terjadi cost overrun 15-20%",
                "Material waste dan theft tinggi",
                "Sulit monitor progress multiple project",
                "Payment ke subkon sering delay",
                "Dokumen proyek berantakan dan hilang"
            ],
            after: [
                "Automated tracking dengan mobile app",
                "Budget accuracy 95% dengan alert system",
                "Material waste turun 40% dengan QR tracking",
                "Real-time dashboard untuk semua project",
                "Automated payment schedule on-time",
                "Digital document management dengan backup"
            ]
        }
    }
];
