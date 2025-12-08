import {IsString, IsNotEmpty} from 'class-validator'


export class Logindto{
    @IsString()
            @IsNotEmpty()
            correo: string;
            @IsString()
            @IsNotEmpty()
            contraseña:string;
}