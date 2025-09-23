import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  Activity, 
  Zap, 
  Globe, 
  Target,
  Database,
  BarChart3,
  Circle,
  Monitor,
  Wifi,
  Clock,
  ArrowUp,
  ArrowDown,
  Minus,
  AlertCircle
} from 'lucide-react';

const AdvancedAnalyticsDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveData, setLiveData] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('Connected');
  const [selectedMetric, setSelectedMetric] = useState('production');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate live data updates
      const newDataPoint = {
        time: new Date().toLocaleTimeString(),
        production: Math.floor(Math.random() * 1000) + 8500,
        quality: Math.floor(Math.random() * 5) + 95,
        temperature: Math.floor(Math.random() * 3) + 2,
        orders: Math.floor(Math.random() * 50) + 150,
        efficiency: Math.floor(Math.random() * 10) + 90
      };
      
      setLiveData(prev => [...prev.slice(-19), newDataPoint]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Sample data for various charts
  const productionData = [
    { month: 'Jan', production: 8500, target: 8000, efficiency: 92 },
    { month: 'Feb', production: 9200, target: 8500, efficiency: 94 },
    { month: 'Mar', production: 11500, target: 9000, efficiency: 96 },
    { month: 'Apr', production: 13200, target: 12000, efficiency: 98 },
    { month: 'May', production: 15800, target: 14000, efficiency: 95 },
    { month: 'Jun', production: 18200, target: 16000, efficiency: 97 },
    { month: 'Jul', production: 19500, target: 18000, efficiency: 99 },
    { month: 'Aug', production: 18800, target: 17500, efficiency: 96 },
    { month: 'Sep', production: 16200, target: 15000, efficiency: 94 },
    { month: 'Oct', production: 14500, target: 13000, efficiency: 93 },
    { month: 'Nov', production: 12800, target: 11500, efficiency: 91 },
    { month: 'Dec', production: 13500, target: 12000, efficiency: 89 }
  ];

  const regionData = [
    { name: 'United States', value: 60, sales: 7200000, growth: 18 },
    { name: 'Europe', value: 35, sales: 4200000, growth: 15 },
    { name: 'Canada', value: 5, sales: 600000, growth: 12 }
  ];

  const qualityMetrics = [
    { category: 'Size Consistency', score: 98, target: 95 },
    { category: 'Color Quality', score: 96, target: 90 },
    { category: 'Vitality Index', score: 94, target: 92 },
    { category: 'Temperature Control', score: 99, target: 98 },
    { category: 'Packaging Standards', score: 97, target: 95 },
    { category: 'Delivery Freshness', score: 95, target: 93 }
  ];

  const competitorComparison = [
    { company: 'National Bait Inc.', market: 65, quality: 98, price: 85, satisfaction: 96 },
    { company: 'Others', market: 35, quality: 78, price: 82, satisfaction: 75 }
  ];

  const temperatureData = [
    { hour: '00:00', facility1: 35.2, facility2: 34.8, facility3: 35.5, optimal: 35.0 },
    { hour: '04:00', facility1: 34.9, facility2: 35.1, facility3: 34.7, optimal: 35.0 },
    { hour: '08:00', facility1: 35.3, facility2: 35.4, facility3: 35.0, optimal: 35.0 },
    { hour: '12:00', facility1: 35.7, facility2: 35.9, facility3: 35.2, optimal: 35.0 },
    { hour: '16:00', facility1: 35.8, facility2: 36.0, facility3: 35.6, optimal: 35.0 },
    { hour: '20:00', facility1: 35.1, facility2: 35.3, facility3: 34.9, optimal: 35.0 }
  ];

  const colors = ['#10b981', '#06d6a0', '#14b8a6', '#0d9488', '#047857', '#065f46'];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Connected': return 'text-emerald-400';
      case 'Reconnecting': return 'text-yellow-400';
      case 'Disconnected': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const calculateTrend = (current, previous) => {
    const change = ((current - previous) / previous) * 100;
    return change.toFixed(1);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 min-h-screen pt-24 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Live Status */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Live Analytics Dashboard
            </h1>
            <p className="text-emerald-100 text-lg">
              Real-time production, quality, and market intelligence
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 lg:mt-0">
            <div className="flex items-center space-x-2">
              <Wifi className={`w-5 h-5 ${getStatusColor(connectionStatus)}`} />
              <span className={`font-semibold ${getStatusColor(connectionStatus)}`}>
                {connectionStatus}
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-white">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span className="font-mono">{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {[
            { 
              title: 'Daily Production', 
              value: '18,245', 
              unit: 'units',
              change: '+12.5%',
              icon: Activity,
              color: 'emerald'
            },
            { 
              title: 'Quality Score', 
              value: '98.2', 
              unit: '%',
              change: '+0.8%',
              icon: Target,
              color: 'teal'
            },
            { 
              title: 'Active Orders', 
              value: '247', 
              unit: 'orders',
              change: '+23.1%',
              icon: Database,
              color: 'emerald'
            },
           
            { 
              title: 'Efficiency', 
              value: '96.8', 
              unit: '%',
              change: '+2.1%',
              icon: Zap,
              color: 'emerald'
            }
          ].map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <metric.icon className={`w-8 h-8 text-${metric.color}-400`} />
                <div className="flex items-center space-x-1">
                  <ArrowUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-semibold">{metric.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {metric.value}
                <span className="text-sm text-gray-300 ml-1">{metric.unit}</span>
              </div>
              <div className="text-gray-300 text-sm">{metric.title}</div>
            </div>
          ))}
        </div>

        {/* Main Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          
          {/* Production Trends */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-emerald-400" />
                Production vs Target (2024)
              </h2>
              <div className="flex space-x-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Actual</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Target</span>
                </div>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="production" 
                  stroke="#10b981" 
                  fill="url(#productionGradient)" 
                  strokeWidth={3}
                />
                <Area 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#14b8a6" 
                  fill="url(#targetGradient)" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <defs>
                  <linearGradient id="productionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Regional Distribution */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-emerald-400" />
              Regional Sales Distribution
            </h2>
            
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}%`}
                  labelStyle={{ fill: 'white', fontSize: '12px' }}
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                  formatter={(value, name) => [`${value}%`, 'Market Share']}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4 space-y-2">
              {regionData.slice(0, 3).map((region, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colors[index] }}
                    />
                    <span className="text-white">{region.name}</span>
                  </div>
                  <span className="text-emerald-300">${formatNumber(region.sales)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Metrics & Temperature Control */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Quality Metrics */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-emerald-400" />
              Quality Performance
            </h2>
            
            <div className="space-y-4">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{metric.category}</span>
                    <span className="text-emerald-300 font-bold">{metric.score}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Target: {metric.target}%</span>
                    <span>{metric.score > metric.target ? '✓ Above Target' : '⚠ Below Target'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Temperature Control */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Monitor className="w-6 h-6 mr-3 text-emerald-400" />
              Cooler Temperature (°F)
            </h2>
            
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="hour" stroke="#9ca3af" />
                <YAxis domain={[34, 36]} stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="facility1" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Cooler 1"
                />
                <Line 
                  type="monotone" 
                  dataKey="facility2" 
                  stroke="#14b8a6" 
                  strokeWidth={2}
                  name="Cooler 2"
                />
                <Line 
                  type="monotone" 
                  dataKey="facility3" 
                  stroke="#06d6a0" 
                  strokeWidth={2}
                  name="Cooler 3"
                />
                <Line 
                  type="monotone" 
                  dataKey="optimal" 
                  stroke="#fbbf24" 
                  strokeWidth={2}
                  strokeDasharray="8 8"
                  name="Optimal"
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-emerald-600/20 p-3 rounded-lg">
                <div className="text-emerald-300 text-sm">Average Temp</div>
                <div className="text-white text-xl font-bold">35.2°F</div>
              </div>
              <div className="bg-teal-600/20 p-3 rounded-lg">
                <div className="text-teal-300 text-sm">Range</div>
                <div className="text-white text-xl font-bold">34-36°F</div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitor Analysis */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-emerald-400" />
            Competitive Analysis Matrix
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-white font-semibold">Company</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Market Share</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Quality Score</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Price Index</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Satisfaction</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((company, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-4 px-4">
                      <span className={`font-semibold ${index === 0 ? 'text-emerald-300' : 'text-white'}`}>
                        {company.company}
                        {index === 0 && <span className="ml-2 text-xs bg-emerald-600 px-2 py-1 rounded">YOU</span>}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <div className="w-20 bg-gray-700 rounded-full h-2 mr-3">
                          <div 
                            className={`h-2 rounded-full ${index === 0 ? 'bg-emerald-500' : 'bg-gray-500'}`}
                            style={{ width: `${company.market * 3}px` }}
                          />
                        </div>
                        <span className="text-white">{company.market}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-white">{company.quality}%</td>
                    <td className="py-4 px-4 text-center text-white">{company.price}</td>
                    <td className="py-4 px-4 text-center text-white">{company.satisfaction}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Data Stream */}
        {liveData.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-emerald-400" />
              Live Production Stream
            </h2>
            
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={liveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="production" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  name="Production Rate"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedAnalyticsDashboard;