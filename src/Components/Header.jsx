import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
       <div className='flex flex-col justify-center items-center py-3'>
         <div className='logo'>
            <img className='w-[470px] mb-5' src={logo} alt={logo} />
        </div>
        <h2 className='text-[#706F6F] text-[18px] mb-2.5'>Journalism Without Fear or Favour</h2>
        <p className='text-[#706F6F] font-medium text-xl'>{moment().format("dddd, MMMM DD, YYYY")}</p>
       </div>
    );
};

export default Header;