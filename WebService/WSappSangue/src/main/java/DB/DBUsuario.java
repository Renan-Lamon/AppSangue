/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DB;

import domain.Usuario;
import java.util.ArrayList;

/**
 *
 * @author Lamon's House
 */
public class DBUsuario {
    public ArrayList<Usuario> seila = new ArrayList<Usuario>();
    
   public ArrayList<Usuario> popular(){
       seila.add(new Usuario("Juca Costa", "A+","Hospital Evangélico",20,"teste@hotmail.com", "123",1));
        seila.add(new Usuario("Piririm aaaa", "B+","Santa Casa",20,"cu@hotmail.com", "555123",6));
         seila.add(new Usuario("Arroz empanado", "A+","Hospital Evangélico",20,"seila@hotmail.com", "12233",7));
         
         return seila;
   }
}
