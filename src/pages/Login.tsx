import { z } from 'zod';
import image from '../assets/FarmHouse.svg'
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../stores/useAuthStore.ts';
import ButtonComponent from '../components/ButtonComponent.tsx';
import InputComponent from '../components/InputComponents.tsx';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    interface FormValues {
        email: string;
        password: string;
    }

    const formSchema = z.object({
        email: z.string().email('Digite um email válido'),
        password: z.string().min(6,'A senha deve conter no minímo 6 caráctere.'),
    })

    const { formState: { errors }, handleSubmit, control} = useForm<FormValues>({
        resolver: zodResolver(formSchema)}
    );

    const { login, erro, loading, isAuthenticated } = useAuthStore();
    const navigate = useNavigate()

    if(isAuthenticated){
        navigate('/')
    }

    function onSubmit(data: FormValues) {    
        login(
            data.email,
            data.password
        );
    }

    return (
        <div className="flex overflow-hidden">
            <div className='w-1/2 flex justify-center p-20 items-center bg-green-500 h-screen'>
                <img src={image} alt="Image" />
            </div>
            <div className='w-6/12 flex h-screen justify-center p-12 items-center'>
                <div className='w-full p-24'>
                    <h1 className='text-3xl font-bold mb-4'>Login</h1>
                    <Controller
                        control={control}
                        name="email"
                        defaultValue=''
                        render={({ field: { onChange, value, name } } ) => 
                            <InputComponent 
                                label='Email' 
                                value={value} 
                                placeholder="Digite email" 
                                error={errors.email?.message? String(errors.email?.message) :null} 
                                onchangeText={onChange} 
                            />
                        }
                    />
                    <Controller
                        control={control}
                        name="password"
                        defaultValue=''
                        render={({ field: { onChange, value } } ) => 
                            <InputComponent 
                                label='Senha'
                                value={value}
                                placeholder="Digite senha"
                                error={errors.password?.message? String(errors.password?.message) :null}
                                onchangeText={onChange} 
                            />
                        }
                    />

                    <ButtonComponent onClick={handleSubmit(onSubmit)} title={'Entrar'}/>
                    <div className="w-full  flex justify-center items-center mt-4">
                        {erro && <p className="text-xl text-red-500">{erro}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login