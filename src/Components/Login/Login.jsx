import React from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleAuth from './GoogleAuth';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& label': {
        color: '#64657e',
        fontWeight: 'bold'
    },
    '& label.Mui-focused': {
        color: '#64657e',
        opacity: 0.5
    },
    '& .MuiFilledInput-root': {
        overflow: 'hidden',
        borderRadius: 15,
        border: '2px solid #f2f1f2',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',

        '&.Mui-focused': {
            backgroundColor: '#f2f1f2',

        },
    },
}));


const Login = () => {

    const [email, setEmail] = React.useState('')

    return (
        <div style={{
            padding: '35px 50px'
        }}>
            <div style={{
                width: '100%',
                display: 'flex'
            }}>
                <div style={{
                    width: '47.5%',
                }}>
                    <img src="https://d1luwo5u9zpc4i.cloudfront.net/assets/memory_logo-f1db7b16e667aab7b9a607429d44d5cc17125da4f36faac751017cdb71ea8ac2.svg" alt="" height='25px' width='93px' />
                </div>
                <div style={{
                    width: '47.5%'
                }}>
                    <img src="https://d1luwo5u9zpc4i.cloudfront.net/assets/memory_apps/timely_icon-0009454e9497f1cb2a0f9042037156a62c31421032858278d5002aae979084a2.svg" alt=""
                        style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '10px'
                        }} />
                </div>
            </div>


            <div style={{
                width: '100%',
                display: 'flex',
                padding: '150px 0px 0px 0px',
                boxSizing: 'border-box',
                color: '#64657e'
            }}>
                <div style={{
                    width: '50%',
                    textAlign: 'center',
                    paddingTop: '55px'
                }}>
                    <h2>Top rated time tracking</h2>

                    <div style={{
                        marginTop: '30px'
                    }}>
                        <img src="https://d1luwo5u9zpc4i.cloudfront.net/assets/g2/g2_badge_leader_2022-4989cf71ff2b88b58b3df99236eb51391394fb1b9aba84d52b9c6d200f326f86.svg" alt=""
                            style={{
                                width: '116px',
                                height: '150px',
                                margin: '15px'
                            }} />
                        <img src="https://d1luwo5u9zpc4i.cloudfront.net/assets/g2/g2_badge_users_love_us-2008b519df49af90dcfa7db4b5fe13c8ec24ced0348f0a6bd039711ad8bbffc7.svg" alt=""
                            style={{
                                width: '116px',
                                height: '150px',
                                margin: '15px'
                            }} />
                        <img src="https://d1luwo5u9zpc4i.cloudfront.net/assets/g2/g2_badge_usability_2022-9131129e6af4167315ef22db0d53e5335fe1d6333d95f91c1deb0ff454165883.svg" alt=""
                            style={{
                                width: '116px',
                                height: '150px',
                                margin: '15px'
                            }} />
                    </div>

                    <h2 style={{
                        margin: '0 auto 5px',
                        fontSize: '20px',
                        width: '450px'
                    }}>“The best way to measure exactly where your time goes.”</h2>
                    <span style={{
                        fontWeight: '400'
                    }}>
                        <span style={{
                            color: 'black',
                            marginRight: '5px'
                        }}>Brian,</span>
                        Accountant</span>


                    <h2 style={{
                        margin: '15px auto 5px',
                        fontSize: '20px',
                        width: '450px'
                    }}>“Timely takes a load off my brain.”</h2>
                    <span style={{
                        fontWeight: '400'
                    }}>
                        <span style={{
                            color: 'black',
                            marginRight: '5px'
                        }}>Erik,</span>
                        Digital Designer</span>


                    <h2 style={{
                        margin: '15px auto 5px',
                        fontSize: '20px',
                        width: '450px'
                    }}>“Easy to use and I love the project level summaries.”</h2>
                    <span style={{
                        fontWeight: '400'
                    }}>
                        <span style={{
                            color: 'black',
                            marginRight: '5px'
                        }}>Jonathan,</span>
                        Software Engineer</span>
                </div>

                <div style={{
                    width: '50%',
                    textAlign: 'center'
                }}>
                    <h1 style={{
                        fontSize: '48px',
                        marginTop: '0',
                        marginBottom: '20px',
                        lineHeight: '1.21'
                    }}>Log in to Timely</h1>
                    <span>
                        Don't have an account? <span style={{ color: '#00d68c' }}>Sign up</span>
                    </span>
                    <div>
                        <RedditTextField
                            label="Email"
                            id="reddit-input"
                            variant="filled"
                            style={{
                                marginTop: 30,
                                width: '480px',
                                height: '62px'
                            }}
                            value={email} onChange={
                                (event) => {
                                    setEmail(event.target.value)
                                }
                            }
                        />
                    </div>

                    <Button variant="contained"

                        sx={{
                            marginTop: '15px',
                            width: '480px',
                            height: '62px',
                            borderRadius: '17px',
                            textTransform: 'none',
                            backgroundColor: '#00d68c',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#05bd7d',
                                boxShadow: 'none'
                            },
                            '&:active': {
                                boxShadow: 'none',
                                backgroundColor: '#00d68c'
                            },
                        }}
                        disabled={email ? false : true}>
                        Next
                    </Button>
                    <p style={{ color: '#00d68c', fontWeight: '500' }}>I forgot my password</p>


                       
                    <Link to='/dashboard'><GoogleAuth /></Link> 

                    <Button variant="outlined" startIcon={<AppleIcon sx={{ fontSize: '100px' }} />}
                        sx={{
                            marginTop: '15px',
                            width: '480px',
                            height: '62px',
                            border: '2px solid #f2f1f2',
                            borderRadius: '17px',
                            textTransform: 'none',
                            backgroundColor: 'white',
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#e0e0e0',
                                boxShadow: 'none',
                                border: '2px solid #f2f1f2',
                            },
                            '&:active': {
                                boxShadow: 'none',
                                backgroundColor: '#e0e0e0'
                            },
                        }}>
                        <span style={{ color: '#64657e', marginLeft: '100px' }}>Sign in with Apple</span>
                    </Button>
                </div>
            </div>


            <span style={{
                color: '#64657e',
                fontSize: '13px'
            }}>Copyright 2022 Memory AS</span>
        </div>
    )
}

export default Login