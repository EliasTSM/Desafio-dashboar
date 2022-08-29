import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  tipoSenha:string = 'password';

  constructor(private servicoAutent: AutenticacaoService, private router:Router) { }

  ngOnInit(): void { }

  login(){
    this.servicoAutent.autenticar(this.usuario, this.senha).subscribe(()=> {
      this.router.navigate(['menu']);
    }, (error)=> {
      alert("Usuário ou senha inválida");
      console.log(error);
    }
    )
  }

  mostraSenha(){
    if(this.tipoSenha == 'password'){
      this.tipoSenha = 'text';
    }else {
      this.tipoSenha = 'password';
    }
  }

}
