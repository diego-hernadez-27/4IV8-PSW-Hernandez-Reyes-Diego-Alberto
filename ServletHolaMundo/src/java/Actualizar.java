/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

/**
 *
 * @author Admin
 */
public class Actualizar extends HttpServlet {

    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    public void init(ServletConfig cfg) throws ServletException{
        
        String URL = "jdbc:mysql://localhost/registro4iv8";
        String userName = "root";
        String password = "admin";
        
        try{
            
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(URL, userName, password);
            set = con.createStatement();
            System.out.println("Conexion exitosa");
            
        }catch (Exception e){
            
            System.out.println("Conexion no exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
            
        }
    }
    
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            int id = Integer.parseInt(request.getParameter("idactualizar")),
                edad = Integer.parseInt(request.getParameter("idactualizar"));
            
            String nom = request.getParameter("newnombre"),
                   appat = request.getParameter("newappat"),
                   apmat = request.getParameter("newapmat"),
                   correo = request.getParameter("newcorreo");
                    
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Actualizar</title>");     
            out.println("<link rel='stylesheet' href='./CSS/respuesta.css>'"); 
            out.println("</head>");
            out.println("<body>");
            
            try{
                
                String q = "UPDATE Mregistro SET nom_usu ='" + nom + "',appat_usu ='" + appat + "', apmat_usu ='"
                        + apmat + "', correo_usu='" + correo + "', edad_usu='" + edad + "' WHERE id_usu=" + id;
                set.executeUpdate(q);
                
                out.println("<h1>La Actualizacion Ha Sido Exitossa</h1>");
                out.println("<p>"
                        + "Tu nombre es: " + nom
                        + "<br>"
                        + "Tu apellido paterno es: " + appat
                        + "<br>"
                        + "Tu apellido materno es: " + apmat
                        + "<br>"
                        + "Tu edad es: " +edad
                        + "<br>"
                        + "Tu correo electronico es:  "+correo
                        + "<br>"
                        + "</p>");
                out.println("<br>"
                        + "<a href='index.html'>Regresar a la pagina principal</a>");
               
                set.close();
                
            }catch (Exception e){
                
                out.println("<img clas=mensaje' src='./IMAGENES/Tache.png'>"
                        + "<br>");
                out.println("<h1>Usuario No Eliminado</h1>"
                        + "<br>"
                        + "<a href='index.html'>Regresar a la pagina principal</a>");
                System.out.println("No se pudo eliminar el usuario");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                
            }
            
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }
    
    
    public void destroy(){
        try{
            con.close();
  
        
        }catch(Exception e){
            super.destroy();
        
        }
    }  

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
