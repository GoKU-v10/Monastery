import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const RealTimeMonitoring = () => {
  const [selectedMetric, setSelectedMetric] = useState('temperature');
  const [isLive, setIsLive] = useState(true);

  // Mock real-time data
  const [data, setData] = useState([
    { time: '00:00', temperature: 18, humidity: 65, airQuality: 42, windSpeed: 8 },
    { time: '04:00', temperature: 16, humidity: 68, airQuality: 38, windSpeed: 6 },
    { time: '08:00', temperature: 22, humidity: 58, airQuality: 45, windSpeed: 12 },
    { time: '12:00', temperature: 28, humidity: 52, airQuality: 48, windSpeed: 15 },
    { time: '16:00', temperature: 26, humidity: 55, airQuality: 44, windSpeed: 18 },
    { time: '20:00', temperature: 21, humidity: 62, airQuality: 40, windSpeed: 10 }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData];
        const lastEntry = newData?.[newData?.length - 1];
        const currentTime = new Date();
        const timeString = `${currentTime?.getHours()?.toString()?.padStart(2, '0')}:${currentTime?.getMinutes()?.toString()?.padStart(2, '0')}`;
        
        // Generate realistic variations
        const newEntry = {
          time: timeString,
          temperature: Math.max(10, Math.min(35, lastEntry?.temperature + (Math.random() - 0.5) * 4)),
          humidity: Math.max(30, Math.min(90, lastEntry?.humidity + (Math.random() - 0.5) * 8)),
          airQuality: Math.max(20, Math.min(80, lastEntry?.airQuality + (Math.random() - 0.5) * 6)),
          windSpeed: Math.max(0, Math.min(30, lastEntry?.windSpeed + (Math.random() - 0.5) * 5))
        };

        // Keep only last 24 hours of data (simulate)
        if (newData?.length >= 24) {
          newData?.shift();
        }
        
        return [...newData, newEntry];
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  const metrics = [
    {
      id: 'temperature',
      name: 'Temperature',
      unit: '°C',
      icon: 'Thermometer',
      color: '#C4914C',
      current: data?.[data?.length - 1]?.temperature || 0,
      status: 'normal'
    },
    {
      id: 'humidity',
      name: 'Humidity',
      unit: '%',
      icon: 'Droplets',
      color: '#A8C8EC',
      current: data?.[data?.length - 1]?.humidity || 0,
      status: 'normal'
    },
    {
      id: 'airQuality',
      name: 'Air Quality',
      unit: 'AQI',
      icon: 'Wind',
      color: '#7C9885',
      current: data?.[data?.length - 1]?.airQuality || 0,
      status: 'good'
    },
    {
      id: 'windSpeed',
      name: 'Wind Speed',
      unit: 'km/h',
      icon: 'Zap',
      color: '#8B7355',
      current: data?.[data?.length - 1]?.windSpeed || 0,
      status: 'normal'
    }
  ];

  const selectedMetricData = metrics?.find(m => m?.id === selectedMetric);

  const getStatusColor = (status) => {
    switch (status) {
      case 'good':
        return 'text-success bg-success/10';
      case 'normal':
        return 'text-primary bg-primary/10';
      case 'warning':
        return 'text-warning bg-warning/10';
      case 'critical':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Live Status */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-sans font-semibold text-xl text-foreground">Real-Time Environmental Monitoring</h3>
          <p className="text-muted-foreground">Live data from monastery environmental sensors</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${isLive ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}`}>
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-success animate-pulse' : 'bg-muted-foreground'}`} />
            <span className="text-sm font-medium">{isLive ? 'Live' : 'Paused'}</span>
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Icon name={isLive ? 'Pause' : 'Play'} size={18} />
          </button>
        </div>
      </div>
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics?.map((metric) => (
          <button
            key={metric?.id}
            onClick={() => setSelectedMetric(metric?.id)}
            className={`p-4 rounded-lg border text-left transition-all duration-200 ${
              selectedMetric === metric?.id
                ? 'border-primary bg-primary/5 shadow-soft'
                : 'border-border bg-card hover:border-primary/50 hover:shadow-soft'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${getStatusColor(metric?.status)}`}>
                <Icon name={metric?.icon} size={20} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-sans font-semibold text-foreground">
                  {Math.round(metric?.current * 10) / 10}
                </div>
                <div className="text-sm text-muted-foreground">{metric?.unit}</div>
              </div>
            </div>
            <div className="text-sm font-medium text-foreground">{metric?.name}</div>
            <div className={`text-xs mt-1 px-2 py-1 rounded-full inline-block ${getStatusColor(metric?.status)}`}>
              {metric?.status}
            </div>
          </button>
        ))}
      </div>
      {/* Chart */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="font-sans font-medium text-lg text-foreground">
              {selectedMetricData?.name} Trends
            </h4>
            <p className="text-sm text-muted-foreground">24-hour monitoring data</p>
          </div>
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selectedMetricData?.color }}
            />
            <span className="text-sm text-muted-foreground">
              Current: {Math.round(selectedMetricData?.current * 10) / 10} {selectedMetricData?.unit}
            </span>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={selectedMetricData?.color} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={selectedMetricData?.color} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="time" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-popover)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-medium)'
                }}
                labelStyle={{ color: 'var(--color-foreground)' }}
              />
              <Area
                type="monotone"
                dataKey={selectedMetric}
                stroke={selectedMetricData?.color}
                strokeWidth={2}
                fill="url(#colorGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Alerts and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="AlertTriangle" size={20} className="text-warning" />
            <h4 className="font-sans font-medium text-lg text-foreground">Recent Alerts</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-warning/5 border border-warning/20 rounded-lg">
              <Icon name="Thermometer" size={16} className="text-warning mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Temperature spike detected</p>
                <p className="text-xs text-muted-foreground">2 hours ago • Resolved</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-success/5 border border-success/20 rounded-lg">
              <Icon name="Droplets" size={16} className="text-success mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Humidity levels normalized</p>
                <p className="text-xs text-muted-foreground">6 hours ago • Resolved</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="Activity" size={20} className="text-success" />
            <h4 className="font-sans font-medium text-lg text-foreground">System Status</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Sensor Network</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium text-success">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Data Transmission</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium text-success">Active</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Last Update</span>
              <span className="text-sm font-medium text-foreground">
                {new Date()?.toLocaleTimeString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Uptime</span>
              <span className="text-sm font-medium text-foreground">99.8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;