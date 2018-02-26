/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ws.wsappsangue;

import DB.DBUsuario;
import domain.Conta;
import domain.Usuario;
import domain.buceta;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Lamon's House
 */
@Path("login")
public class Login {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of Login
     */
    public Login() {
    }

    /**
     * Retrieves representation of an instance of ws.wsappsangue.Login
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Conta getJson() {
        //TODO return proper representation object
        Conta conta = new Conta();
        return conta;
    }

    @GET
    @Produces(MediaType.TEXT_HTML)
    @Path("autentificacao/{email}/{senha}")
    public String Logar(@PathParam("email") String email, @PathParam("senha") String senha) {
       Conta conta = new Conta();
       if(conta.getSenha().equals(senha) && conta.getEmail().equals(email)){
           return Integer.toString(conta.getCod());
       }else{
           //valor da variavel 666 qd o usuario n for autenticado q n conseguiu logar     
           return "666";
       }
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("dadosUsuario/{cod}")
    public Usuario DadosUsuario(@PathParam("cod") int cod) {
        DBUsuario listaUsuarios = new DBUsuario();
        
        for(Usuario u : listaUsuarios.popular()){
            if(u.getCod() == cod){
                return u;
            }
        }
       
        return null;
    }

    /**
     * PUT method for updating or creating an instance of Login
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
