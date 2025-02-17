"use client";

import Header from "@/components/header/header";
import { DataTable } from "@/components/table/table";
import Link from "next/link";

const data = [
  {
    id: "m5gr84i9",
    product: "Vidya Force",
    "valor-do-contrato-atual": "R$ 1.200,00",
    "numero-de-usuarios-contratados": 10,
    data: "12/09/2021",
  },
  {
    id: "b7th93a2",
    product: "Vidya Sales",
    "valor-do-contrato-atual": "R$ 1.500,00",
    "numero-de-usuarios-contratados": 12,
    data: "10/09/2021",
  },
  {
    id: "k2op56f4",
    product: "Vidya Promoter",
    "valor-do-contrato-atual": "R$ 1.820,00",
    "numero-de-usuarios-contratados": 12,
    data: "08/09/2021",
  },
  {
    id: "l9qr23g8",
    product: "Vidya Express",
    "valor-do-contrato-atual": "R$ 3.500,00",
    "numero-de-usuarios-contratados": 15,
    data: "09/09/2021",
  },
  {
    id: "p3xy84j1",
    product: "Vidya Rocket",
    "valor-do-contrato-atual": "R$ 4.200,00",
    "numero-de-usuarios-contratados": 9,
    data: "13/09/2021",
  },
];

const columns = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product",
    header: "Produto",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("product")}</div>
    ),
  },
  {
    accessorKey: "valor-do-contrato-atual",
    header: "Valor do Contrato Atual",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("valor-do-contrato-atual")}
      </div>
    ),
  },
  {
    accessorKey: "numero-de-usuarios-contratados",
    header: "Número de Usuários Contratados",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("numero-de-usuarios-contratados")}
      </div>
    ),
  },
  {
    accessorKey: "data",
    header: "Data",
    cell: ({ row }) => <div className="capitalize">{row.getValue("data")}</div>,
  },
];

export default function LicensedProductsPage() {
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
              Produtos Licenciados{" "}
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
