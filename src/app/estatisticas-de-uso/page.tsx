"use client";

import Header from "@/components/header/header";
import { DataTable } from "@/components/table/table";
import Link from "next/link";

const data = [
  {
    id: "m5gr84i9",
    usuario: "Marcelo Soares",
    aparelho: "Samsung Galaxy S10",
    memory: "8GB/3GB",
    CPU: "Snapdragon 855",
    product: "Vidya Force",
    "ultima-conexao": "12/09/2021 14:00",
    "acessos-no-mes": 10,
    "tempo-medio-de-loading": "1.2s",
  },
  {
    id: "b7th93a2",
    usuario: "Ana Oliveira",
    aparelho: "iPhone 12",
    memory: "4GB/3GB",
    CPU: "A14 Bionic",
    product: "Vidya Sales",
    "ultima-conexao": "10/09/2021 11:30",
    "acessos-no-mes": 8,
    "tempo-medio-de-loading": "0.9s",
  },
  {
    id: "k2op56f4",
    usuario: "Carlos Silva",
    aparelho: "Xiaomi Mi 11",
    memory: "8GB/5GB",
    CPU: "Snapdragon 888",
    product: "Vidya Promoter",
    "ultima-conexao": "08/09/2021 19:45",
    "acessos-no-mes": 12,
    "tempo-medio-de-loading": "1.0s",
  },
  {
    id: "l9qr23g8",
    usuario: "Fernanda Lima",
    aparelho: "Samsung Galaxy A71",
    memory: "6GB/3GB",
    CPU: "Snapdragon 730",
    product: "Vidya Sales",
    "ultima-conexao": "09/09/2021 15:20",
    "acessos-no-mes": 15,
    "tempo-medio-de-loading": "1.1s",
  },
  {
    id: "p3xy84j1",
    usuario: "Ricardo Souza",
    aparelho: "Motorola G100",
    memory: "8GB/4GB",
    CPU: "Snapdragon 870",
    product: "Vidya Force",
    "ultima-conexao": "13/09/2021 09:10",
    "acessos-no-mes": 9,
    "tempo-medio-de-loading": "1.3s",
  },
  {
    id: "u5mp46f7",
    usuario: "Juliana Santos",
    aparelho: "Huawei P30",
    memory: "6GB/4GB",
    CPU: "Kirin 980",
    product: "Vidya Express",
    "ultima-conexao": "11/09/2021 12:50",
    "acessos-no-mes": 14,
    "tempo-medio-de-loading": "0.8s",
  },
  {
    id: "t7ql92c5",
    usuario: "Paulo Ricardo",
    aparelho: "OnePlus 8T",
    memory: "12GB/8GB",
    CPU: "Snapdragon 865",
    product: "Vidya Force",
    "ultima-conexao": "07/09/2021 18:30",
    "acessos-no-mes": 11,
    "tempo-medio-de-loading": "1.0s",
  },
  {
    id: "n8vw63h3",
    usuario: "Luciana Ribeiro",
    aparelho: "iPhone 11 Pro",
    memory: "4GB/2GB",
    CPU: "A13 Bionic",
    product: "Vidya Call",
    "ultima-conexao": "10/09/2021 22:15",
    "acessos-no-mes": 7,
    "tempo-medio-de-loading": "1.4s",
  },
  {
    id: "o6zx71d2",
    usuario: "Gabriel Martins",
    aparelho: "Google Pixel 5",
    memory: "8GB/6GB",
    CPU: "Snapdragon 765G",
    product: "Vidya Force",
    "ultima-conexao": "12/09/2021 13:40",
    "acessos-no-mes": 10,
    "tempo-medio-de-loading": "0.9s",
  },
  {
    id: "v3tw84a9",
    usuario: "Bianca Costa",
    aparelho: "Samsung Galaxy S20",
    memory: "12GB/6GB",
    CPU: "Exynos 990",
    product: "Vidya Sales",
    "ultima-conexao": "11/09/2021 17:25",
    "acessos-no-mes": 13,
    "tempo-medio-de-loading": "1.0s",
  },
  {
    id: "r5yl92k6",
    usuario: "Fábio Nunes",
    aparelho: "Realme GT",
    memory: "8GB/5GB",
    CPU: "Snapdragon 888",
    product: "Vidya Force",
    "ultima-conexao": "08/09/2021 08:00",
    "acessos-no-mes": 12,
    "tempo-medio-de-loading": "1.1s",
  },
  {
    id: "q4jx53f1",
    usuario: "Mariana Teixeira",
    aparelho: "Sony Xperia 5 II",
    memory: "8GB/6GB",
    CPU: "Snapdragon 865",
    product: "Vidya Promoter",
    "ultima-conexao": "09/09/2021 20:10",
    "acessos-no-mes": 10,
    "tempo-medio-de-loading": "1.2s",
  },
  {
    id: "x9hm21d8",
    usuario: "Victor Gomes",
    aparelho: "Oppo Find X3 Pro",
    memory: "12GB/8GB",
    CPU: "Snapdragon 888",
    product: "Vidya Force",
    "ultima-conexao": "12/09/2021 10:15",
    "acessos-no-mes": 11,
    "tempo-medio-de-loading": "0.8s",
  },
  {
    id: "z2nl34g5",
    usuario: "Renata Carvalho",
    aparelho: "LG Velvet",
    memory: "6GB/4GB",
    CPU: "Snapdragon 765G",
    product: "Vidya Express",
    "ultima-conexao": "10/09/2021 14:30",
    "acessos-no-mes": 9,
    "tempo-medio-de-loading": "1.1s",
  },
  {
    id: "y3wp65f7",
    usuario: "Felipe Duarte",
    aparelho: "Asus ROG Phone 3",
    memory: "16GB/12GB",
    CPU: "Snapdragon 865 Plus",
    product: "Vidya Sales",
    "ultima-conexao": "07/09/2021 16:00",
    "acessos-no-mes": 14,
    "tempo-medio-de-loading": "1.3s",
  },
  {
    id: "a8vr29c3",
    usuario: "Vanessa Lopes",
    aparelho: "Samsung Galaxy Note 20",
    memory: "8GB/6GB",
    CPU: "Exynos 990",
    product: "Vidya Promoter",
    "ultima-conexao": "11/09/2021 18:45",
    "acessos-no-mes": 8,
    "tempo-medio-de-loading": "1.0s",
  },
  {
    id: "w5kp84a2",
    usuario: "Bruno Mendes",
    aparelho: "Nokia 8.3 5G",
    memory: "8GB/6GB",
    CPU: "Snapdragon 765G",
    product: "Vidya Force",
    "ultima-conexao": "12/09/2021 21:20",
    "acessos-no-mes": 11,
    "tempo-medio-de-loading": "0.9s",
  },
  {
    id: "e6zp91h4",
    usuario: "Lúcia Ferreira",
    aparelho: "Poco X3 Pro",
    memory: "8GB/6GB",
    CPU: "Snapdragon 860",
    product: "Vidya Force",
    "ultima-conexao": "10/09/2021 13:00",
    "acessos-no-mes": 10,
    "tempo-medio-de-loading": "1.2s",
  },
  {
    id: "d9tm32k7",
    usuario: "Gustavo Almeida",
    aparelho: "Vivo X60 Pro",
    memory: "12GB/8GB",
    CPU: "Exynos 1080",
    product: "Vidya Force",
    "ultima-conexao": "09/09/2021 07:30",
    "acessos-no-mes": 12,
    "tempo-medio-de-loading": "1.0s",
  },
  {
    id: "c7rl84f6",
    usuario: "Aline Pereira",
    aparelho: "Honor 50",
    memory: "8GB/6GB",
    CPU: "Snapdragon 778G",
    product: "Vidya Force",
    "ultima-conexao": "08/09/2021 11:45",
    "acessos-no-mes": 9,
    "tempo-medio-de-loading": "0.8s",
  },
];

const columns = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "usuario",
    header: "Usuário",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("usuario")}</div>
    ),
  },
  {
    accessorKey: "aparelho",
    header: "Aparelho",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("aparelho")}</div>
    ),
  },
  {
    accessorKey: "memory",
    header: "Memória Total/Disponível",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("memory")}</div>
    ),
  },
  {
    accessorKey: "CPU",
    header: "CPU",
    cell: ({ row }) => <div className="capitalize">{row.getValue("CPU")}</div>,
  },
  {
    accessorKey: "product",
    header: "Produto Vidya",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("product")}</div>
    ),
  },
  {
    accessorKey: "ultima-conexao",
    header: "Última Conexão",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("ultima-conexao")}</div>
    ),
  },
  {
    accessorKey: "acessos-no-mes",
    header: "Acessos no Mês",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("acessos-no-mes")}</div>
    ),
  },
  {
    accessorKey: "tempo-medio-de-loading",
    header: "Tempo Médio de Loading",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("tempo-medio-de-loading")}</div>
    ),
  },
];

export default function UsageStatisticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white gap-2">
      <Header />
      <div className="flex  flex-row pt-2 px-10 justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <Link
            href="#"
            className="flex  border-2 h-9 w-9 items-center justify-center rounded-full"
            prefetch={false}
          >
            <BackIcon className="h-6 w-6" />
          </Link>
          <div>
            <p className="text-[20px] font-[550] tracking-wide text-[#1C1B1F]">
              Estatísticas de uso
            </p>
            <p className="text-[15px] text-[#79747E] tracking-widest font-[550] ">
              Novembro 2024
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center bg-[#E1ECFD] py-2 px-6 rounded-3xl">
          <PlusIcon className="h-4 w-4" />
          <p className="font-[550] text-sm text-[#49454F]">
            Adicionar Novo Usuário
          </p>
        </div>
      </div>
      <div className="flex-grow flex-row gap-4 w-full h-full bg-[#fff] flex py-2 px-10">
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}

function BackIcon(props) {
  return (
    <svg
      {...props}
      width="30"
      height="30"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_552_306"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="30"
      >
        <rect y="0.0244141" width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_552_306)">
        <path
          d="M10 18.0244L4 12.0244L10 6.02441L11.4 7.47441L7.85 11.0244H20V13.0244H7.85L11.4 16.5744L10 18.0244Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.09375 6.77441H0.59375V5.27441H5.09375V0.774414H6.59375V5.27441H11.0938V6.77441H6.59375V11.2744H5.09375V6.77441Z"
        fill="#1C1B1F"
      />
    </svg>
  );
}
