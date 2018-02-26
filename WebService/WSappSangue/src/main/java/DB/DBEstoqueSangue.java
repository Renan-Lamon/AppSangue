/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DB;

import domain.EstoqueSangue;
import java.util.ArrayList;

/**
 *
 * @author Lamon's House
 */
public class DBEstoqueSangue {

    public ArrayList<EstoqueSangue> listaEstoque = new ArrayList<EstoqueSangue>();

    public ArrayList<EstoqueSangue> popular() {
        listaEstoque.add(new EstoqueSangue("A+", "satisfatorio", 5, "Hospital Evangélico", 1));
        listaEstoque.add(new EstoqueSangue("A-", "satisfatorio", 80, "Hospital Evangélico", 2));
        listaEstoque.add(new EstoqueSangue("B+", "critico", 3, "Hospital Evangélico", 3));
        listaEstoque.add(new EstoqueSangue("B-", "baixo", 30, "Hospital Evangélico", 4));
        listaEstoque.add(new EstoqueSangue("AB+", "critico", 31, "Hospital Evangélico", 5));
        listaEstoque.add(new EstoqueSangue("AB-", "satisfatorio", 90, "Hospital Evangélico", 6));
        listaEstoque.add(new EstoqueSangue("O+", "critico", 2, "Hospital Evangélico", 7));
        listaEstoque.add(new EstoqueSangue("O-", "critico", 10, "Hospital Evangélico", 8));

        listaEstoque.add(new EstoqueSangue("A+", "critico", 5, "Santa Casa", 1));
        listaEstoque.add(new EstoqueSangue("A-", "critico", 80, "Santa Casa", 2));
        listaEstoque.add(new EstoqueSangue("B+", "critico", 3, "Santa Casa", 3));
        listaEstoque.add(new EstoqueSangue("B-", "critico", 30, "Santa Casa", 4));
        listaEstoque.add(new EstoqueSangue("AB+", "critico", 31, "Santa Casa", 5));
        listaEstoque.add(new EstoqueSangue("AB-", "critico", 90, "Santa Casa", 6));
        listaEstoque.add(new EstoqueSangue("O+", "critico", 2, "Santa Casa", 7));
        listaEstoque.add(new EstoqueSangue("O-", "critico", 10, "Santa Casa", 8));
        return listaEstoque;
    }
}
