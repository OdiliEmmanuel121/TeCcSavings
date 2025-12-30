import './Home.css'
import { Link } from 'react-router-dom';
import {
    AccountBalanceWallet,
    TrendingUp,
    SupportAgent,
    Person,
    AccountCircleRounded,
    Add,
    ArrowCircleDownRounded
} from '@mui/icons-material';
import './Home.css';
import { ArrowBigRight, ArrowBigRightDash, ArrowBigUpDashIcon, ArrowRight } from 'lucide-react';
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';


const Home = () => {

    const monthlyData = [
        { month: 'Jan', savings: 45000 },
        { month: 'Feb', savings: 52000 },
        { month: 'Mar', savings: 48000 },
        { month: 'Apr', savings: 61000 },
        { month: 'May', savings: 55000 },
        { month: 'Jun', savings: 67000 },
        { month: 'Jul', savings: 72000 },
        { month: 'Aug', savings: 65000 },
        { month: 'Sep', savings: 80000 },
        { month: 'Oct', savings: 85000 },
        { month: 'Nov', savings: 92000 },
        { month: 'Dec', savings: 100000 },
    ];

    return (
        <div className="internal-home">
            <div className='home-acc'>
                <header className="home-header">
                    <h1>Dashboard</h1>
                    <p>Welcome back! Here is your financial overview.</p>
                </header>
                <header className="home-Acc">
                    <p>Good morning</p>
                    <h2>Odili Toyin</h2>
                </header>
                <div className='acc-icon'>
                    < AccountCircleRounded className='acc-iconC' />
                </div>
            </div>




            {/* Quick Stats / Top Cards */}
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Savings</h3>
                    <p>₦450,000.00</p>
                    <h5 className='Balance' >Balance Updated</h5>

                    <div className='AddDiv'>
                        <div className='cardAdd'>
                            <Add className='addicon' />
                            <h5> Add Money</h5>
                        </div>
                        <div className='cardSend' >
                            <ArrowRight className='arrowicon' />
                            <h5> Send Money</h5>
                        </div>
                    </div>

                </div>
                <div className="stat-card">
                    <h3>Total Interest</h3>
                    <p className="green-text">+₦12,400.00</p>

                    <div className='AddDiv1'>
                        <div className='cardSend1' >
                            <ArrowRight className='arrowicon1' />
                            <h5> Send Money</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className='Internal-H3'>
                <h3>Your Investment</h3>
            </div>
            {/* Internal Navigation Links (Middle of screen) */}
            <div className="internal-nav-grid">

                <div to="/wall" className="nav-box">
                    <TrendingUp className="icon" />
                    <div className='Investdiv'>
                        <h3>House rent</h3>
                        <p>₦950,000.00</p>
                        <h5 className='Invest' >Balance Updated</h5>
                    </div>
                    <ArrowBigUpDashIcon className='investarrow' />

                </div>
                <div to="/inv" className="nav-box">
                    <TrendingUp className="icon" />
                    <div className='Investdiv'>
                        <h3>Kiddes future</h3>
                        <p>₦40,000,000.00</p>
                        <h5 className='Invest' >Balance Updated</h5>
                    </div>
                    <ArrowBigUpDashIcon className='investarrow' />

                </div >
                <div to="/acc" className="nav-box">
                    <TrendingUp className="icon" />
                    <div className='Investdiv'>
                        <h3>Daddy's vehicle</h3>
                        <p>₦7,000,000.00</p>
                        <h5 className='Invest' >Balance Updated</h5>
                    </div>
                    <ArrowBigUpDashIcon className='investarrow' />

                </div>
                <div to="/con" className="nav-box">
                    <TrendingUp className="icon" />
                    <div className='Investdiv'>
                        <h3>My Investment</h3>
                        <p>₦450,000.00</p>
                        <h5 className='Invest' >Balance Updated</h5>
                    </div>
                    <ArrowBigUpDashIcon className='investarrow' />

                </div>
            </div>

            <div className="chart-section">
                <div className="chart-card">
                    <div className="chart-header">
                        <h3>Savings Growth</h3>
                        <p>Monthly performance for the last 12 months</p>
                    </div>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis 
                                    dataKey="month" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                                />
                                <YAxis 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                                    tickFormatter={(value) => `₦${value/1000}k`}
                                />
                                <Tooltip 
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                    formatter={(value) => [`₦${value.toLocaleString()}`, 'Saved']}
                                />
                                <Bar dataKey="savings" radius={[6, 6, 0, 0]}>
                                    {monthlyData.map((entry, index) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={index === monthlyData.length - 1 ? '#00d094' : '#061a11'} 
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;