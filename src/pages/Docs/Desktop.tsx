import { routeList } from "routes/Desktop";
import Titulo1 from "smrt-library/Components/Docs/Titulo1";
import Titulo2 from "smrt-library/Components/Docs/Titulo2";
import Divisor from "smrt-library/Components/Docs/Divisor";
import DefaultLayout from "smrt-library/Layouts/Desktop/DefaultLayout";
import Paragrafo from "smrt-library/Components/Docs/Paragrafo";
// import Imagem from "smrt-library/Components/Docs/Imagem";
import Menu from "smrt-library/Components/Docs/Menu";
// import Assistant from "smrt-library/Components/Docs/Assistant";
import Conteudo from "smrt-library/Components/Docs/Conteudo";
// import SideBar from 'assets/docs/SideBar.png';
// import StatusBar from 'assets/docs/StatusBar.png';
// import Alertas from 'assets/docs/Alertas.png';
// import Overview from 'assets/docs/OverView.png';
// import IndicadoresOv from 'assets/docs/IndicadoresOverview.png';
// import BarChart from 'assets/docs/BarChart.png';
// import PieChart from 'assets/docs/PieChart.png';
// import Indicadores from 'assets/docs/Indicadores.png';
// import IndicadoresCard from 'assets/docs/IndicadoresCard.png';
// import Cabine from 'assets/docs/Cabine.png';
// import CabineDetails from 'assets/docs/CabineDetails.png';
// import CabineChart from 'assets/docs/CabineChart.png';
// import Manutencao from 'assets/docs/Motores.png';
// import Variaveis from 'assets/docs/Variaveis.png';
// import VariaveisDetails1 from 'assets/docs/VariaveisDetail1.png';
// import VariaveisDetails2 from 'assets/docs/VariaveisDetail2.png';
// import MobileOverview from 'assets/docs/Mobile1.png';
// import MobileAlarmes from 'assets/docs/Mobile2.png';
// import MobileProcesso from 'assets/docs/Mobile3.png';
// import MobileEstufas from 'assets/docs/Mobile4.png';
// import MobileManutencao from 'assets/docs/Mobile5.png';
import styled from "styled-components";


export default function Docs() {

    const Page = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

    return <DefaultLayout routes={routeList}>
        <Page>
            <Menu />
            <Conteudo>
                <Titulo1>
                    Seções Padrão
                </Titulo1>
                <Divisor />
                <Titulo2>
                    Barra Lateral
                </Titulo2>
                <Paragrafo>
                    A barra ou menu lateral, pode ser acessado a partir de qualquer página da aplicação. O menu possui atalhos rápidos para as principais e mais usadas páginas. Sua versão expandida permite acesso a sub-páginas que contém informações adicionais
                </Paragrafo>
                {/* <Imagem img={SideBar} ></Imagem> */}
                <Divisor />
                <Titulo2>
                    Barra De Status
                </Titulo2>
                <Paragrafo>
                    A barra de status é uma representação do status atual da máquina a ser monitorada, permitindo uma visão geral do funcionamento do equipamento nesse momento. Ela pode mostrar diferentes status, como paradas, alarmes e trocas de cor.
                </Paragrafo>
                {/* <Imagem img={StatusBar} ></Imagem> */}
                <Titulo1>
                    Tela Inicial
                </Titulo1>
                <Paragrafo>
                    A tela Inicial permite ao usuário visualizar os principais aspectos e ativos monitorados, as principais contagens e cálculos de produtividade e disponibilidade. Botões seletores em cada card de visualização permitem agrupar os dados por diferentes períodos de tempo pré determinados.
                </Paragrafo>
                {/* <Imagem img={Overview} ></Imagem> */}
                <Paragrafo>
                    A seção de Ultimos Alertas mostra além dos alarmes do CLP, também alertas que podem ser cadastrados pelo usuário. Os alertas podem ser de diferentes níveis, como erros ou avisos e após serem normalizados entram no estado de solucionado.
                </Paragrafo>
                {/* <Imagem img={Alertas} ></Imagem> */}
                <Paragrafo>
                    O card de Indicadores mostra uma seleção específica de ativos, calculados ou coletados da linha, que são considerados críticos.
                    Possui um ícone indicador do ativo, seu valor e sua unidade de medida.
                </Paragrafo>
                {/* <Imagem img={IndicadoresOv} ></Imagem> */}
                <Paragrafo>
                    Os cards de Contagem agrupam os valores em períodos pré definidos de tempo disponíveis nas caixas seletoras. O ativo a ser monitorado pode ser diferente dependendo da aplicação e necessidade de rastreio.
                </Paragrafo>
                {/* <Imagem img={BarChart} ></Imagem> */}
                <Paragrafo>
                    O card de Disponibilidade fornece uma visão gráfica e simplificada de status e condições da linha, demonstrando-as de forma percentual ao longo de um intervalo de tempo pré-definido.
                </Paragrafo>
                {/* <Imagem img={PieChart} ></Imagem> */}
                <Titulo1>
                    Processos
                </Titulo1>
                <Titulo2>
                    Indicadores
                </Titulo2>
                <Paragrafo>
                    Os ativos mostrados na tela de processo são organizados em cards com valor e um gráfico histórico. Cada ativo possui um estado indicado pela cor, que demostra se o valor do mesmo está fora dos limites escolhidos.
                </Paragrafo>
                {/* <Imagem img={Indicadores} ></Imagem> */}
                <Titulo2>
                    Cards
                </Titulo2>
                {/* <Imagem img={IndicadoresCard} ></Imagem> */}
                <Titulo1>
                    Cabine
                </Titulo1>
                <Paragrafo>
                    A tela de monitoramento de cabine permite acompanhar a produção e a média de ocupação do equipamento.
                </Paragrafo>
                {/* <Imagem img={Cabine} ></Imagem> */}
                <Paragrafo>
                    Dentro da tela das cabines a parte superior é responsável por um diagnóstico rápido sobre o atual e anterior estado do equipamento, permitindo certas análises e rápida intervenção caso necessário.
                </Paragrafo>
                {/* <Imagem img={CabineDetails} ></Imagem> */}
                <Paragrafo>
                    O mapa de calor da ocupação exibe através do uso de cores, o percentual de ocupação em certo período de tempo que pode ser ajustado através dos seletores na parte superior.
                </Paragrafo>
                {/* <Imagem img={CabineChart} ></Imagem> */}
                <Titulo1>
                    Manutenção
                </Titulo1>
                <Paragrafo>
                    A seção de Manutenção é composta de várias informações sobre os motores que estão sendo usados no momento
                </Paragrafo>
                {/* <Imagem img={Manutencao} ></Imagem> */}
                <Titulo1>
                    Variáveis
                </Titulo1>
                <Paragrafo>
                    A Página de análise, é a mais funcional pois permite uma análise gráfica de qualquer variável monitorada. Pode ser utilizada para acompanhar produção, aquecimento de temperaturas de processo, uso de consumíveis como gás entre outras funções.
                </Paragrafo>
                {/* <Imagem img={Variaveis} ></Imagem> */}
                <Paragrafo>
                    Período de seleção para análise composto de data inicial e final, Seletor de tipo de agregação para os dados e o período em que será aplicada a integração
                </Paragrafo>
                {/* <Imagem img={VariaveisDetails1} ></Imagem> */}
                <Paragrafo>
                    A barra de pesquisa consta com uma lista de seleção para as variáveis que serão analisadas e conta também com um seletor permite que mais de uma variável seja visualizada
                </Paragrafo>
                {/* <Imagem img={VariaveisDetails2} ></Imagem> */}
                <Titulo1>
                    Mobile
                </Titulo1>
                <Paragrafo>
                    A versão mobile conta com as mesmas funções da versão de desktop porem rearranjadas de uma maneira que fique agradavel para o usuário em telas menores
                </Paragrafo>
                <Titulo2>
                    Overview
                </Titulo2>
                <Paragrafo>
                    A versão mobile da pagina inicial conta com um ajuste de todas as informações disponiveis para que possam se tornar faceis de compreender até em dispositivos móveis, contando com uma visão geral de todo o processo da linha de pintura
                </Paragrafo>
                {/* <Imagem img={MobileOverview} ></Imagem> */}
                <Titulo2>
                    Alarmes
                </Titulo2>
                <Paragrafo>
                    A tela de alarmes conta com um histórico dos ultimos alarmes, sejam eles problemas resolvidos ou não, constam com uma descrição do ocorrido, junto com a data e o horario exato para uma melhor resolução do problema
                </Paragrafo>
                {/* <Imagem img={MobileAlarmes} ></Imagem> */}
                <Titulo2>
                    Processo
                </Titulo2>
                <Paragrafo>
                    A Tela de processos conta com um apontamento das variaveis monitoradas nas maquinas, com um historico de comportamento dessas variaveis
                </Paragrafo>
                {/* <Imagem img={MobileProcesso} ></Imagem> */}
                <Titulo2>
                    Estufas
                </Titulo2>
                <Paragrafo>
                    Essa pagina é similar a de monitoramento de variaveis, porém essa tela tem o objetivo de monitorar os processos pelo qual a linha de pintura passa.
                </Paragrafo>
                {/* <Imagem img={MobileEstufas} ></Imagem> */}
                <Titulo2>
                    Manutenção
                </Titulo2>
                <Paragrafo>
                    A tela de Manutenção tem como objetivo mostrar os dados sobre os motores que estão sendo usados no momento. passando informações como: potência, corrente e velocidade
                </Paragrafo>
                {/* <Imagem img={MobileManutencao} ></Imagem> */}
            </Conteudo>
            {/* <Assistant/> */}
        </Page>
    </DefaultLayout>

}