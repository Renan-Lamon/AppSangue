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
public class Usuario {
    private String nome;
    private String tipoSanguineo;
    private String hemocentroFavorito;
    private int idade;
    private String email;
    private String senha;
    private int cod;

    public Usuario() {
        this.nome="sdhushd";
    }

    public Usuario(String nome, String tipoSanguineo, String hemocentroFavorito, int idade, String email, String senha, int cod) {
        this.nome = nome;
        this.tipoSanguineo = tipoSanguineo;
        this.hemocentroFavorito = hemocentroFavorito;
        this.idade = idade;
        this.email = email;
        this.senha = senha;
        this.cod = cod;
    }
    
    
    
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTipoSanguineo() {
        return tipoSanguineo;
    }

    public void setTipoSanguineo(String tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo;
    }

    public String getHemocentroFavorito() {
        return hemocentroFavorito;
    }

    public void setHemocentroFavorito(String hemocentroFavorito) {
        this.hemocentroFavorito = hemocentroFavorito;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
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

    public int getCod() {
        return cod;
    }

    public void setCod(int cod) {
        this.cod = cod;
    }
    
    
}
