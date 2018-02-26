/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domain;

/**
 *
 * @author Lamon's House
 */
public class Conta {
    private String email;
    private String senha;
    private int cod;
    
    public Conta(){
        this.email="teste@hotmail.com";
        this.senha="123";
        this.cod=1;
    }

    public Conta(String email, String senha, int cod) {
        this.email = email;
        this.senha = senha;
        this.cod = cod;
    }

    public int getCod() {
        return cod;
    }

    public void setCod(int cod) {
        this.cod = cod;
    }
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
}
