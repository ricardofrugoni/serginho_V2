<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Dashboard Plano de Negócio - Projeção 12 Meses Seguros">
    <meta name="keywords" content="plano, negócio, seguros, dashboard, análise">
    <meta name="author" content="Equipe Desenvolvimento">
    
    <title>Dashboard - Plano de Negócio</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Chart.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
    
    <!-- CSS Styles -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📊</text></svg>">
</head>
<body>
    <div class="dashboard-container">
        <div class="header">
            <img src="logo.png" alt="Logo PROVION" class="logo">
            <p>Projeção Estratégica - 12 Meses (Meta: 20.000 Placas Ativas)</p>
        </div>

        <div class="cycle-selector">
            <button class="cycle-btn active" onclick="selectMonth(1)">Mês 1</button>
            <button class="cycle-btn" onclick="selectMonth(2)">Mês 2</button>
            <button class="cycle-btn" onclick="selectMonth(3)">Mês 3</button>
            <button class="cycle-btn" onclick="selectMonth(4)">Mês 4</button>
            <button class="cycle-btn" onclick="selectMonth(5)">Mês 5</button>
            <button class="cycle-btn" onclick="selectMonth(6)">Mês 6</button>
            <button class="cycle-btn" onclick="selectMonth(7)">Mês 7</button>
            <button class="cycle-btn" onclick="selectMonth(8)">Mês 8</button>
            <button class="cycle-btn" onclick="selectMonth(9)">Mês 9</button>
            <button class="cycle-btn" onclick="selectMonth(10)">Mês 10</button>
            <button class="cycle-btn" onclick="selectMonth(11)">Mês 11</button>
            <button class="cycle-btn" onclick="selectMonth(12)">Mês 12</button>
        </div>

        <div class="metrics-grid">
            <div class="metric-card">
                <h3>Faturamento Bruto</h3>
                <div class="metric-value highlight-revenue" id="faturamento">R$ 0,00</div>
                <div class="metric-change" id="faturamento-info"></div>
            </div>
            <div class="metric-card">
                <h3>Placas Ativas (Pagantes)</h3>
                <div class="metric-value highlight-growth" id="placas-ativas">0</div>
                <div class="metric-change" id="placas-info"></div>
            </div>
            <div class="metric-card">
                <h3>Novas Placas no Mês</h3>
                <div class="metric-value" id="novas-placas">0</div>
                <div class="metric-change" id="novas-info"></div>
            </div>
            <div class="metric-card">
                <h3>Quantidade de Sinistros</h3>
                <div class="metric-value highlight-sinistro" id="qtd-sinistros">0</div>
                <div class="metric-change" id="sinistros-info"></div>
            </div>
            <div class="metric-card">
                <h3>Custo de Sinistros</h3>
                <div class="metric-value highlight-sinistro" id="custo-sinistros">R$ 0,00</div>
                <div class="metric-change" id="custo-info"></div>
            </div>
            <div class="metric-card">
                <h3>Faturamento Líquido</h3>
                <div class="metric-value highlight-net" id="faturamento-liquido">R$ 0,00</div>
                <div class="metric-change" id="liquido-info"></div>
            </div>
            <div class="metric-card">
                <h3>Churn 5%</h3>
                <div class="metric-value highlight-churn" id="churn-placas">0</div>
                <div class="metric-change" id="churn-info"></div>
            </div>
        </div>

        <div class="charts-grid">
            <div class="chart-container">
                <div class="chart-title">Evolução Financeira Mensal</div>
                <div class="chart-wrapper">
                    <canvas id="financialChart"></canvas>
                </div>
            </div>
            <div class="chart-container">
                <div class="chart-title">Crescimento da Base vs Sinistros</div>
                <div class="chart-wrapper">
                    <canvas id="growthChart"></canvas>
                </div>
            </div>
        </div>

        <div class="analysis-section">
            <div class="section-title">📈 Análise Detalhada por Mês</div>
            
            <div class="dropdown active">
                <div class="dropdown-header" onclick="toggleDropdown(this)">
                    <span id="current-month-title">Mês 1 - Período</span>
                    <span class="dropdown-arrow">▼</span>
                </div>
                <div class="dropdown-content">
                    <div class="kpi-row">
                        <div class="kpi-item">
                            <div class="kpi-label">Frequência de Sinistro</div>
                            <div class="kpi-value highlight-sinistro" id="freq-sinistro">1%</div>
                        </div>
                        <div class="kpi-item">
                            <div class="kpi-label">Ticket Médio Sinistro</div>
                            <div class="kpi-value highlight-sinistro" id="ticket-sinistro">R$ 0,00</div>
                        </div>
                        <div class="kpi-item">
                            <div class="kpi-label">FIPE Média</div>
                            <div class="kpi-value" id="fipe-medio">R$ 48.000,00</div>
                        </div>
                        <div class="kpi-item">
                            <div class="kpi-label">Churn do Mês</div>
                            <div class="kpi-value" id="churn-mes">5%</div>
                        </div>
                    </div>
                    
                    <div id="month-analysis" style="margin-top: 20px; line-height: 1.6;"></div>
                </div>
            </div>
        </div>

        <footer class="footer">
            <p>Dashboard Plano de Negócio | Desenvolvido por Ricardo Frugoni - Gestor de dados, IA e Integrações - Provion Seguros ®</p>
        </footer>
    </div>

    <!-- JavaScript -->
    <script src="script.js"></script>
</body>
</html>