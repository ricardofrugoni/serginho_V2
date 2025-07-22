// Dados do Plano de Negócio - 12 Meses (CORRIGIDO - Pagamento desde primeiro mês)
const businessData = [
    {
        month: 1,
        placasInicio: 0,
        novasPlacas: 2105,
        churn: 0,
        placasFinais: 2105,
        faturamentoBruto: 526250, // 2105 placas × R$ 250
        qtdSinistros: 21,
        custoSinistros: 157875,
        faturamentoLiquido: 368375,
        ticketMedioSinistro: 7518,
        crescimentoLiquido: 2105,
        analysis: "Início da operação com 2.105 placas ativas pagando desde o primeiro mês. Estratégia conservadora estabelece base sólida para crescimento sustentável. Faturamento de R$ 526.250 com sinistralidade controlada em 30%."
    },
    {
        month: 2,
        placasInicio: 2105,
        novasPlacas: 2211,
        churn: 105,
        placasFinais: 4211,
        faturamentoBruto: 1080250, // (2105 + 2211) × R$ 250 = 4316 × R$ 250
        qtdSinistros: 43,
        custoSinistros: 324075,
        faturamentoLiquido: 756175,
        ticketMedioSinistro: 7537,
        crescimentoLiquido: 2106,
        analysis: "Todas as placas (base anterior + novas) pagam desde o primeiro dia. Faturamento real de R$ 1.080.250 considerando 4.316 placas pagantes. Churn de 5% controlado, demonstrando satisfação inicial dos clientes."
    },
    {
        month: 3,
        placasInicio: 4211,
        novasPlacas: 2321,
        churn: 211,
        placasFinais: 6321,
        faturamentoBruto: 1633000, // (4211 + 2321) × R$ 250 = 6532 × R$ 250
        qtdSinistros: 65,
        custoSinistros: 489900,
        faturamentoLiquido: 1143100,
        ticketMedioSinistro: 7537,
        crescimentoLiquido: 2110,
        analysis: "Base atinge 6.321 placas finais, mas 6.532 placas pagaram durante o mês. Faturamento bruto de R$ 1.633.000 confirma crescimento real. Sinistralidade controlada demonstra maturidade operacional."
    },
    {
        month: 4,
        placasInicio: 6321,
        novasPlacas: 2437,
        churn: 316,
        placasFinais: 8442,
        faturamentoBruto: 2189500, // (6321 + 2437) × R$ 250 = 8758 × R$ 250
        qtdSinistros: 88,
        custoSinistros: 656850,
        faturamentoLiquido: 1532650,
        ticketMedioSinistro: 7464,
        crescimentoLiquido: 2121,
        analysis: "8.758 placas pagaram durante o mês gerando R$ 2.189.500. Base final de 8.442 placas representa 42% da meta anual. Faturamento real considera todas as placas que estiveram ativas no período."
    },
    {
        month: 5,
        placasInicio: 8442,
        novasPlacas: 2558,
        churn: 422,
        placasFinais: 10578,
        faturamentoBruto: 2750000, // (8442 + 2558) × R$ 250 = 11000 × R$ 250
        qtdSinistros: 110,
        custoSinistros: 825000,
        faturamentoLiquido: 1925000,
        ticketMedioSinistro: 7500,
        crescimentoLiquido: 2136,
        analysis: "Marco histórico: 11.000 placas pagaram no mês! Faturamento de R$ 2.750.000 marca novo patamar. Base final de 10.578 placas representa mais da metade da meta anual."
    },
    {
        month: 6,
        placasInicio: 10578,
        novasPlacas: 2685,
        churn: 529,
        placasFinais: 12734,
        faturamentoBruto: 3315750, // (10578 + 2685) × R$ 250 = 13263 × R$ 250
        qtdSinistros: 133,
        custoSinistros: 994725,
        faturamentoLiquido: 2321025,
        ticketMedioSinistro: 7481,
        crescimentoLiquido: 2156,
        analysis: "13.263 placas pagaram durante o mês, gerando faturamento recorde de R$ 3.315.750. Base final de 12.734 placas (64% da meta). Crescimento real do faturamento reflete estratégia correta de cobrança."
    },
    {
        month: 7,
        placasInicio: 12734,
        novasPlacas: 2821,
        churn: 637,
        placasFinais: 14918,
        faturamentoBruto: 3888750, // (12734 + 2821) × R$ 250 = 15555 × R$ 250
        qtdSinistros: 156,
        custoSinistros: 1166625,
        faturamentoLiquido: 2722125,
        ticketMedioSinistro: 7478,
        crescimentoLiquido: 2184,
        analysis: "15.555 placas pagaram no período, alcançando faturamento de R$ 3.888.750. Base final de 14.918 placas (75% da meta). Reta final ativada com faturamento real crescente."
    },
    {
        month: 8,
        placasInicio: 14918,
        novasPlacas: 2967,
        churn: 746,
        placasFinais: 17139,
        faturamentoBruto: 4471250, // (14918 + 2967) × R$ 250 = 17885 × R$ 250
        qtdSinistros: 179,
        custoSinistros: 1341375,
        faturamentoLiquido: 3129875,
        ticketMedioSinistro: 7497,
        crescimentoLiquido: 2221,
        analysis: "17.885 placas pagaram durante o mês, gerando R$ 4.471.250. Faturamento líquido supera R$ 3,1 milhões. Performance excepcional com 86% da meta anual atingida na base final."
    },
    {
        month: 9,
        placasInicio: 17139,
        novasPlacas: 3124,
        churn: 857,
        placasFinais: 19406,
        faturamentoBruto: 5065750, // (17139 + 3124) × R$ 250 = 20263 × R$ 250
        qtdSinistros: 203,
        custoSinistros: 1519725,
        faturamentoLiquido: 3546025,
        ticketMedioSinistro: 7487,
        crescimentoLiquido: 2267,
        analysis: "20.263 placas pagaram no mês - primeira vez acima de 20.000 pagantes! Faturamento de R$ 5.065.750. Base final de 19.406 placas (97% da meta). Meta de placas pagantes já superada!"
    },
    {
        month: 10,
        placasInicio: 19406,
        novasPlacas: 3294,
        churn: 970,
        placasFinais: 21730,
        faturamentoBruto: 5675000, // (19406 + 3294) × R$ 250 = 22700 × R$ 250
        qtdSinistros: 227,
        custoSinistros: 1702500,
        faturamentoLiquido: 3972500,
        ticketMedioSinistro: 7500,
        crescimentoLiquido: 2324,
        analysis: "MARCO HISTÓRICO! 22.700 placas pagaram no mês, superando todas as expectativas. Faturamento de R$ 5.675.000. Meta de 20.000 placas finais oficialmente superada com 21.730 placas."
    },
    {
        month: 11,
        placasInicio: 21730,
        novasPlacas: 2479,
        churn: 1087,
        placasFinais: 23122,
        faturamentoBruto: 6052250, // (21730 + 2479) × R$ 250 = 24209 × R$ 250
        qtdSinistros: 242,
        custoSinistros: 1815675,
        faturamentoLiquido: 4236575,
        ticketMedioSinistro: 7503,
        crescimentoLiquido: 1392,
        analysis: "24.209 placas pagaram durante o mês, estabelecendo novo recorde de faturamento: R$ 6.052.250. Base final consolidada em 23.122 placas. Operação demonstra capacidade de processamento massivo."
    },
    {
        month: 12,
        placasInicio: 23122,
        novasPlacas: 2624,
        churn: 1156,
        placasFinais: 24590,
        faturamentoBruto: 6436500, // (23122 + 2624) × R$ 250 = 25746 × R$ 250
        qtdSinistros: 257,
        custoSinistros: 1930950,
        faturamentoLiquido: 4505550,
        ticketMedioSinistro: 7516,
        crescimentoLiquido: 1468,
        analysis: "RESULTADO EXCEPCIONAL! 25.746 placas pagaram no último mês, gerando faturamento recorde de R$ 6.436.500. Meta superada em 23% com 24.590 placas finais. Faturamento real anual superior a R$ 47 milhões!"
    }
];

// Variáveis Globais
let currentMonth = 1;
let financialChart, growthChart;

// Funções de Formatação
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

function formatNumber(value) {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

// Função Principal - Seleção de Mês
function selectMonth(month) {
    if (month < 1 || month > 12) return;
    
    currentMonth = month;
    
    // Atualizar botão ativo
    document.querySelectorAll('.cycle-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.cycle-btn')[month - 1].classList.add('active');
    
    // Atualizar dashboard
    updateMetrics();
    updateCharts();
    updateAnalysis();
}

// Atualizar Métricas
function updateMetrics() {
    const data = businessData[currentMonth - 1];
    
    // Calcular informações detalhadas
    const placasPagantes = data.placasInicio + data.novasPlacas;
    const faturamentoInfo = `${placasPagantes.toLocaleString('pt-BR')} placas pagantes × R$ 250,00`;
    
    const previousData = businessData[Math.max(0, currentMonth - 2)];
    const placasInfo = data.placasFinais > 0 && previousData ? 
        `+${((data.placasFinais / (previousData.placasFinais || 1) - 1) * 100).toFixed(1)}% vs mês anterior` : 
        'Primeiro mês de operação';
    
    const novasInfo = `Crescimento líquido: ${data.crescimentoLiquido.toLocaleString('pt-BR')}`;
    
    const sinistrosInfo = `${((data.qtdSinistros / placasPagantes) * 100).toFixed(1)}% da base pagante`;
    
    const custoInfo = `Sinistralidade: ${((data.custoSinistros / data.faturamentoBruto) * 100).toFixed(1)}% do faturamento`;
    
    const liquidoInfo = `Margem líquida: ${((data.faturamentoLiquido / data.faturamentoBruto) * 100).toFixed(1)}%`;
    
    const churnInfo = currentMonth === 1 ? 'Primeiro mês de operação' : `${((data.churn / previousData.placasFinais) * 100).toFixed(1)}% da base anterior`;
    
    // Atualizar DOM
    document.getElementById('faturamento').textContent = formatCurrency(data.faturamentoBruto);
    document.getElementById('faturamento-info').textContent = faturamentoInfo;
    
    document.getElementById('placas-ativas').textContent = formatNumber(data.placasFinais);
    document.getElementById('placas-info').textContent = placasInfo;
    
    document.getElementById('novas-placas').textContent = formatNumber(data.novasPlacas);
    document.getElementById('novas-info').textContent = novasInfo;
    
    document.getElementById('qtd-sinistros').textContent = formatNumber(data.qtdSinistros);
    document.getElementById('sinistros-info').textContent = sinistrosInfo;
    
    document.getElementById('custo-sinistros').textContent = formatCurrency(data.custoSinistros);
    document.getElementById('custo-info').textContent = custoInfo;
    
    document.getElementById('faturamento-liquido').textContent = formatCurrency(data.faturamentoLiquido);
    document.getElementById('liquido-info').textContent = liquidoInfo;
    
    document.getElementById('churn-placas').textContent = formatNumber(data.churn);
    document.getElementById('churn-info').textContent = churnInfo;
}

// Atualizar Gráficos
function updateCharts() {
    const monthData = businessData.slice(0, currentMonth);
    
    // Se os gráficos não existem, criar
    if (!financialChart) {
        initializeFinancialChart();
    }
    
    if (!growthChart) {
        initializeGrowthChart();
    }
    
    // Atualizar dados dos gráficos existentes
    if (financialChart) {
        financialChart.data.labels = monthData.map(d => `M${d.month}`);
        financialChart.data.datasets[0].data = monthData.map(d => d.faturamentoBruto);
        financialChart.data.datasets[1].data = monthData.map(d => d.faturamentoLiquido);
        financialChart.data.datasets[2].data = monthData.map(d => d.custoSinistros);
        financialChart.update('none');
    }
    
    if (growthChart) {
        growthChart.data.labels = monthData.map(d => `M${d.month}`);
        growthChart.data.datasets[0].data = monthData.map(d => d.placasFinais);
        growthChart.data.datasets[1].data = monthData.map(d => d.qtdSinistros); // Valores reais sem multiplicação
        growthChart.update('none');
    }
}

function initializeFinancialChart() {
    const ctxFinancial = document.getElementById('financialChart');
    if (!ctxFinancial) return;
    
    financialChart = new Chart(ctxFinancial, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Faturamento Bruto',
                    data: [],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#4CAF50',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: 'Faturamento Líquido',
                    data: [],
                    borderColor: '#2196F3',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#2196F3',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: 'Custo Sinistros',
                    data: [],
                    borderColor: '#FF5722',
                    backgroundColor: 'rgba(255, 87, 34, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#FF5722',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    labels: { 
                        color: 'white',
                        font: { 
                            size: 12,
                            family: 'Manrope',
                            weight: '500'
                        },
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    titleFont: {
                        family: 'Manrope',
                        weight: '600'
                    },
                    bodyFont: {
                        family: 'Manrope',
                        weight: '400'
                    },
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + formatCurrency(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                x: { 
                    ticks: { 
                        color: 'white',
                        font: {
                            family: 'Manrope',
                            weight: '500'
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: { 
                    ticks: { 
                        color: 'white',
                        font: {
                            family: 'Manrope',
                            weight: '500'
                        },
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            }
        }
    });
}

function initializeGrowthChart() {
    const ctxGrowth = document.getElementById('growthChart');
    if (!ctxGrowth) return;
    
    growthChart = new Chart(ctxGrowth, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Placas Ativas',
                    data: [],
                    backgroundColor: 'rgba(33, 150, 243, 0.8)',
                    borderColor: '#2196F3',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Quantidade Sinistros',
                    data: [],
                    backgroundColor: 'rgba(255, 87, 34, 0.8)',
                    borderColor: '#FF5722',
                    borderWidth: 1,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    labels: { 
                        color: 'white',
                        font: { 
                            size: 12,
                            family: 'Manrope',
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    titleFont: {
                        family: 'Manrope',
                        weight: '600'
                    },
                    bodyFont: {
                        family: 'Manrope',
                        weight: '400'
                    },
                    callbacks: {
                        label: function(context) {
                            if (context.datasetIndex === 0) {
                                return 'Placas Ativas: ' + formatNumber(context.parsed.y);
                            } else {
                                return 'Sinistros: ' + formatNumber(context.parsed.y);
                            }
                        }
                    }
                }
            },
            scales: {
                x: { 
                    ticks: { 
                        color: 'white',
                        font: {
                            family: 'Manrope',
                            weight: '500'
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: { 
                        color: 'white',
                        font: {
                            family: 'Manrope',
                            weight: '500'
                        },
                        callback: function(value) {
                            return formatNumber(value);
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: { 
                        color: 'white',
                        font: {
                            family: 'Manrope',
                            weight: '500'
                        },
                        callback: function(value) {
                            return formatNumber(value);
                        }
                    },
                    grid: {
                        drawOnChartArea: false,
                    }
                }
            }
        }
    });
}

// Atualizar Análise
function updateAnalysis() {
    const data = businessData[currentMonth - 1];
    
    document.getElementById('current-month-title').textContent = `Mês ${data.month} - Análise Detalhada`;
    document.getElementById('freq-sinistro').textContent = '1%';
    document.getElementById('ticket-sinistro').textContent = formatCurrency(data.ticketMedioSinistro);
    document.getElementById('fipe-medio').textContent = 'R$ 48.000,00';
    document.getElementById('churn-mes').textContent = '5%';
    document.getElementById('month-analysis').innerHTML = data.analysis;
}

// Toggle Dropdown
function toggleDropdown(element) {
    const dropdown = element.parentElement;
    dropdown.classList.toggle('active');
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('📊 Dashboard Plano de Negócio - Inicializado');
    
    updateMetrics();
    updateCharts();
    updateAnalysis();
    
    // Auto-resize dos gráficos
    window.addEventListener('resize', function() {
        if (financialChart) financialChart.resize();
        if (growthChart) growthChart.resize();
    });
});

// Export para uso global
window.selectMonth = selectMonth;
window.toggleDropdown = toggleDropdown;
