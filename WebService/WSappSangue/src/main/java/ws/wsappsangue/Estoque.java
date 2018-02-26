/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ws.wsappsangue;


import DB.DBEstoqueSangue;
import domain.EstoqueSangue;
import java.util.ArrayList;
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
@Path("estoque")
public class Estoque {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of Estoque
     */
    public Estoque() {
    }

    /**
     * Retrieves representation of an instance of ws.wsappsangue.Estoque
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_HTML)
    public String getJson() {
        //TODO return proper representation object
        return "hsdushdushduh";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("estoqueHemocentro/{hemocentroFavorito}")
    public ArrayList<EstoqueSangue> DadosUsuario(@PathParam("hemocentroFavorito") String hemocentroFavorito) {
        DBEstoqueSangue listaEstoqueSangue = new DBEstoqueSangue();
        //Lista com o estoque sanguineo DO HEMOCENTRO FAVORITO
        DBEstoqueSangue listaEstoqueSangueHemo = new DBEstoqueSangue();
        //
        
        for(EstoqueSangue e : listaEstoqueSangue.popular()){
            if(e.getHemocentroFavorito().equals(hemocentroFavorito)){
                listaEstoqueSangueHemo.listaEstoque.add(e);
            }
        }
       
        return listaEstoqueSangueHemo.listaEstoque;
    }
    
    /**
     * PUT method for updating or creating an instance of Estoque
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
