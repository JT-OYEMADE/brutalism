import { Link } from 'react-router-dom';
import { useRegister } from 'hooks/register';
import Button from 'components/common/Button';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Textfield } from 'components/common/Textfield';

const Register = () => {
  const {
    register,
    onSubmit,
    handleSubmit,
    isPasswordVisible,
    setIsPasswordVisible,
    isConfirmPasswordVisible,
    setIsConfirmPasswordVisible,
  } = useRegister();
  return (
    <div className='bg-primary-light min-h-screen flex flex-col'>
      <div className='bg-white flex justify-center items-center py-[15.5px] h-[60px]'>
        <h1 className='font-bold text-2xl xl:text-3xl tracking-tighter pb-2 lg:pb-0'>
          Brutalism
        </h1>
      </div>
      <div className='flex-grow flex items-center justify-center mt-4'>
        <div className='bg-white max-w-[850px] w-full p-6 rounded-[20px] m-auto'>
          <div className='text-center -leading-[0.04em]'>
            <h2 className=' text-[#111] text-2xl font-medium mb-1.5'>Create Account</h2>
            <p className='text-sm text-[#868C98]'>Fill the fields below to get started</p>
          </div>
          <div className='mt-6 pb-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='space-y-4'>
                <div className='mt-4'>
                  <Textfield
                    id='businessName'
                    register={register}
                    label='Business Name'
                    labelClassName='!text-[#0A0D14] !font-normal'
                  />
                </div>
                <div className='flex gap-x-2 w-full'>
                  <div className='w-full md:w-[1/2]'>
                    <Textfield
                      id='email'
                      register={register}
                      label='Business Email Address'
                      labelClassName='!text-[#0A0D14] !font-normal'
                    />
                  </div>

                  <div className='w-full md:w-[1/2]'>
                    <Textfield
                      id='phone'
                      register={register}
                      label='Phone Number'
                      labelClassName='!text-[#0A0D14] !font-normal'
                    />
                  </div>
                </div>
                <div className='flex gap-x-2 w-full'>
                  <div className='w-full md:w-[1/2]'>
                    <Textfield
                      id='country'
                      register={register}
                      label='Country'
                      labelClassName='!text-[#0A0D14] !font-normal'
                    />
                  </div>

                  <div className='w-full md:w-[1/2]'>
                    <Textfield
                      id='state'
                      register={register}
                      label='State or Region'
                      labelClassName='!text-[#0A0D14] !font-normal'
                    />
                  </div>
                </div>
                <div className='mt-4'>
                  <Textfield
                    id='address'
                    register={register}
                    label='Address'
                    labelClassName='!text-[#0A0D14] !font-normal'
                  />
                </div>
                <div className='flex gap-x-2 w-full'>
                  <div className='w-full md:w-[1/2]'>
                    <Textfield
                      id='password'
                      register={register}
                      label='Password'
                      className='pr-18'
                      placeholder='************'
                      labelClassName='!text-[#0A0D14] !font-normal'
                      type={isPasswordVisible ? 'text' : 'password'}
                      surfixIcon={
                        <span
                          className='cursor-pointer'
                          onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                          <span className='text-sm cursor-pointer'>
                            {!isPasswordVisible ? (
                              <FiEyeOff className='w-4' />
                            ) : (
                              <FiEye className='w-4' />
                            )}
                          </span>
                        </span>
                      }
                    />
                  </div>

                  <div className='w-full md:w-[1/2]'>
                    <Textfield
                      id='confirmPassword'
                      register={register}
                      label='Confirm Password'
                      labelClassName='!text-[#0A0D14] !font-normal'
                      type={isConfirmPasswordVisible ? 'text' : 'password'}
                      surfixIcon={
                        <span
                          className='cursor-pointer'
                          onClick={() =>
                            setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                          }>
                          <span className='text-sm cursor-pointer'>
                            {!isConfirmPasswordVisible ? (
                              <FiEyeOff className='w-4' />
                            ) : (
                              <FiEye className='w-4' />
                            )}
                          </span>
                        </span>
                      }
                    />
                  </div>
                </div>
              </div>
              <Button label='Get Started!' type='submit' className='mt-5' />
              <p className='mt-2 text-sm text-center'>
                Already have an account?{' '}
                <Link to='/login' className='text-[#D2F774]'>
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
