import React from 'react';
import './Account.css';
import { 
    Person, 
    Edit, 
    Notifications, 
    Security, 
    HelpOutline, 
    ChevronRight,
    CameraAlt
} from '@mui/icons-material';

const Account = () => {
    return (
        <div className='Account-Container'>
            <header className="account-header">
                <h2>Account Settings</h2>
            </header>

            {/* Profile Section */}
            <div className="profile-card">
                <div className="avatar-wrapper">
                    <div className="avatar-circle">
                        <Person className="avatar-icon" />
                    </div>
                    <button className="edit-photo-btn">
                        <CameraAlt />
                    </button>
                </div>
                <div className="profile-info">
                    <h3>Odili Toyin</h3>
                    <p>toyin.odili@example.com</p>
                    <span className="account-type">Premium Member</span>
                </div>
                <button className="edit-profile-btn">
                    <Edit /> Edit Profile
                </button>
            </div>

            {/* Account Details / Action List */}
            <div className="settings-section">
                <h3>General</h3>
                <div className="settings-list">
                    <div className="settings-item">
                        <div className="item-left">
                            <div className="icon-wrap blue"><Notifications /></div>
                            <span>Notifications</span>
                        </div>
                        <ChevronRight className="chevron" />
                    </div>

                    <div className="settings-item">
                        <div className="item-left">
                            <div className="icon-wrap green"><Security /></div>
                            <span>Security & Privacy</span>
                        </div>
                        <ChevronRight className="chevron" />
                    </div>

                    <div className="settings-item">
                        <div className="item-left">
                            <div className="icon-wrap gold"><HelpOutline /></div>
                            <span>Support & Help</span>
                        </div>
                        <ChevronRight className="chevron" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;