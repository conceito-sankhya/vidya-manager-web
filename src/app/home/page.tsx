"use client";
import { useState } from "react";
import Header, {
  LogoCall,
  LogoForce,
  LogoRocket,
  LogoSales,
} from "@/components/header/header";
import Image from "next/image";
import { BarChartMultiple } from "@/components/chart/BarChartMultiple";
import { PieChartComponent } from "@/components/chart/PieChart";
import { Link } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Gerais");

  const navItems = ["Gerais", "Force", "Sales", "Promoter", "Express", "Call"];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex-row gap-4 w-full h-full bg-[#F9F9F9] flex p-10">
        <div className="flex flex-col flex-1 gap-8">
          <div className="flex flex-row flex-wrap gap-8 w-full h-full ">
            <div className="flex cursor-pointer flex-1  flex-col  px-8 py-6 rounded-xl bg-white gap-4  shadow-[0px_0px_20px_8px_rgba(202,_196,_208,_0.15)]">
              <p className="text-lg font-semibold text-[#1C1B1F]">
                Estatísticas de Uso
              </p>
              <BarChartMultiple />
            </div>
            <div className="flex cursor-pointer w-[550px]  flex-col  px-8 py-6 rounded-xl bg-white gap-4  shadow-[0px_0px_20px_8px_rgba(202,_196,_208,_0.15)]">
              <p className="text-lg font-semibold text-[#1C1B1F]">
                Produtos Licenciados
              </p>
              <PieChartComponent />
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-8 w-full h-full ">
            <div className="flex cursor-pointer w-[400px]  flex-col  px-8 py-6 rounded-xl bg-white gap-4  shadow-[0px_0px_20px_8px_rgba(202,_196,_208,_0.15)]">
              <p className="text-lg font-semibold text-[#1C1B1F]">
                Parâmetros Mais Utilizados{" "}
              </p>
              <p className="text-sm text-[#79747E]">
                No seu Segmento esses Parâmetros são bastante utilizados
              </p>
            </div>
            <div className="flex cursor-pointer  flex-1 flex-col  px-8 py-6 rounded-xl bg-white gap-4  shadow-[0px_0px_20px_8px_rgba(202,_196,_208,_0.15)]">
              <p className="text-lg font-semibold text-[#1C1B1F]">
                Melhorias da Última Versão{" "}
              </p>

              <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col w-full gap-6 p-4">
                  <div href={"#"} className="flex flex-1 items-start gap-4">
                    <LogoForce className="w-12 h-12" />
                    <div className="flex w-full flex-col">
                      <div className="flex w-full justify-between">
                        <span className="text-black text-[16px] font-[500]">
                          Vidya force web - versão[2.0.469]{" "}
                        </span>
                        <span className="text-black text-[16px] font-[500]">
                          02 Nov
                        </span>
                      </div>
                      <span className="text-[#95A3BC] text-[14px]">
                        [CORREÇÕES] Criar parâmetro para não permitir a troca de
                        local de estoque. [MELHORIAS] Adicionar aba de códigos
                        de barra nos detalhes do produto. [AJUSTES] Adicionar
                        aba de códigos de barra nos detalhes do produto{" "}
                      </span>
                    </div>
                  </div>
                  <div href={"#"} className="flex flex-1 items-start gap-4">
                    <LogoSales className="w-12 h-12" />
                    <div className="flex w-full flex-col">
                      <div className="flex w-full justify-between">
                        <span className="text-black text-[16px] font-[500]">
                          Vidya force web - versão[2.0.469]{" "}
                        </span>
                        <span className="text-black text-[16px] font-[500]">
                          02 Nov
                        </span>
                      </div>
                      <span className="text-[#95A3BC] text-[14px]">
                        [CORREÇÕES] Criar parâmetro para não permitir a troca de
                        local de estoque. [MELHORIAS] Adicionar aba de códigos
                        de barra nos detalhes do produto. [AJUSTES] Adicionar
                        aba de códigos de barra nos detalhes do produto{" "}
                      </span>
                    </div>
                  </div>
                  <div href={"#"} className="flex flex-1 items-start gap-4">
                    <LogoCall className="w-12 h-12" />
                    <div className="flex w-full flex-col">
                      <div className="flex w-full justify-between">
                        <span className="text-black text-[16px] font-[500]">
                          Vidya force web - versão[2.0.469]{" "}
                        </span>
                        <span className="text-black text-[16px] font-[500]">
                          02 Nov
                        </span>
                      </div>
                      <span className="text-[#95A3BC] text-[14px]">
                        [CORREÇÕES] Criar parâmetro para não permitir a troca de
                        local de estoque. [MELHORIAS] Adicionar aba de códigos
                        de barra nos detalhes do produto. [AJUSTES] Adicionar
                        aba de códigos de barra nos detalhes do produto{" "}
                      </span>
                    </div>
                  </div>
                  <div href={"#"} className="flex flex-1 items-start gap-4">
                    <LogoRocket className="w-12 h-12" />
                    <div className="flex w-full flex-col">
                      <div className="flex w-full justify-between">
                        <span className="text-black text-[16px] font-[500]">
                          Vidya force web - versão[2.0.469]{" "}
                        </span>
                        <span className="text-black text-[16px] font-[500]">
                          02 Nov
                        </span>
                      </div>
                      <span className="text-[#95A3BC] text-[14px]">
                        [CORREÇÕES] Criar parâmetro para não permitir a troca de
                        local de estoque. [MELHORIAS] Adicionar aba de códigos
                        de barra nos detalhes do produto. [AJUSTES] Adicionar
                        aba de códigos de barra nos detalhes do produto{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src="/banner.png" alt="Logo" width={360} height={963} />
        </div>
      </div>
    </div>
  );
}

////////////////////////////////////////////////////
