import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import Typography from '@material-ui/core/Typography'
export default function SignUp(){
    return (
        <div style={{
            display:"flex",
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'

        }}>
        <Typography style={{
            display:"flex",
            justifyContent:'center',
            alignItems:'center',
            flexDirection:"column",
            marginBottom:'20px',
            marginRight:'20px'
        }}>Welcome to Coursera , SignUp Below</Typography>
        <div style={{
            width:"300px",
            paddingBottom:"15px",
            paddingTop:"15px",
            backgroundColor:"#ffffff",
            display:"flex",
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            marginTop:'10px',
            
            
        }}>
            <Typography><Input label="filled-basic" placeholder='email'></Input><br /></Typography>
    
            <Typography><Input label='filled-basic' placeholder='password'></Input></Typography><br />

        <div style={{
            paddingTop:"10px"
        }}>
            <Button variant='contained' label="filled-basic">SignUp</Button> 
        </div>
        </div>
        </div>
    )
}