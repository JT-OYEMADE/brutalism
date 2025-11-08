import Button from 'components/common/Button';
import { Textfield } from 'components/common/Textfield';
import { useLogin } from 'hooks/login';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    errors,
    isPasswordVisible,
    isFormValid,
    onSubmit,
    register,
    handleSubmit,
    setIsPasswordVisible,
  } = useLogin();

  return (
    <div className='bg-primary-light min-h-screen flex flex-col'>
      <div className='bg-white flex justify-center items-center py-[15.5px] h-[60px]'>
        <h1 className='font-bold text-2xl xl:text-3xl tracking-tighter pb-2 lg:pb-0'>
          Brutalism
        </h1>
      </div>
      <div className='flex-grow flex items-center justify-center'>
        <div className='bg-white max-w-[450px] w-full p-6 rounded-[20px] m-auto'>
          <div className='text-center -leading-[0.04em]'>
            <h2 className=' text-[#111] text-2xl font-medium mb-1.5'>Log in </h2>
            <p className='text-sm text-[#868C98]'>Enter necessary information below</p>
          </div>
          <div className='mt-6 pb-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-4'>
                <Textfield
                  id='email'
                  label='Email'
                  register={register}
                  error={errors.email?.message}
                  placeholder='john1@gmail.com'
                  className='ring-0 focus:ring-0 border'
                  labelClassName='!text-[#0A0D14] !font-normal'
                />
              </div>
              <div className='mt-4 mb-6'>
                <Textfield
                  id='password'
                  label='Password'
                  register={register}
                  error={errors.password?.message}
                  placeholder='************'
                  className='ring-0 focus:ring-0 border pr-18'
                  labelClassName='!text-[#0A0D14] !font-normal'
                  type={isPasswordVisible ? 'text' : 'password'}
                  surfixIcon={
                    <span
                      className='cursor-pointer'
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                      <span className='text-sm cursor-pointer'>
                        {!isPasswordVisible ? (
                          <RiEyeOffLine className='w-4' />
                        ) : (
                          <RiEyeLine className='w-4' />
                        )}
                      </span>
                    </span>
                  }
                />{' '}
                {/* <Link href='/forgot-password' className='text-primary text-sm text-right'>
                  <p className='mt-2'>Forgot Password?</p>
                </Link> */}
              </div>
              <Button label='Log In' type='submit' disabled={!isFormValid} />
              <p className='mt-2 text-sm text-center'>
                Don&apos;t have an account?{' '}
                <Link to='/register' className='text-[#D2F774]'>
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
