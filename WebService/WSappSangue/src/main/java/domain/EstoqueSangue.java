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
public class EstoqueSangue {
    private String tipoSangue;
    private String situacao;
    private int situacaoPorcentagem;
    private String hemocentroFavorito;
    private int cod;

    public EstoqueSangue() {
    }

    
    public EstoqueSangue(String tipoSangue, String situacao, int situacaoPorcentagem, String hemocentroFavorito, int cod) {
        this.tipoSangue = tipoSangue;
        this.situacao = situacao;
        this.situacaoPorcentagem = situacaoPorcentagem;
        this.hemocentroFavorito = hemocentroFavorito;
        this.cod = cod;
    }

    public String getHemocentroFavorito() {
        return hemocentroFavorito;
    }

    public void setHemocentroFavorito(String hemocentroFavorito) {
        this.hemocentroFavorito = hemocentroFavorito;
    }

    
    
    
    public String getTipoSangue() {
        return tipoSangue;
    }

    public void setTipoSangue(String tipoSangue) {
        this.tipoSangue = tipoSangue;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public int getSituacaoPorcentagem() {
        return situacaoPorcentagem;
    }

    public void setSituacaoPorcentagem(int situacaoPorcentagem) {
        this.situacaoPorcentagem = situacaoPorcentagem;
    }

    public int getCod() {
        return cod;
    }

    public void setCod(int cod) {
        this.cod = cod;
    }
    
    
}
