import Profile from "./components/Profile";
import "./styles/ProfileCSS.css"

export default function App() {
  return(
    <div className="container">
      <div>
        <h1>Usuários do Sistema</h1>
        <p>Conheça os membros da nossa equipe</p>
      </div>

      <div className="cards">
        <div className="profile-card">
          <Profile
            foto={"https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzc29hJTIwYWxlYXQlQzMlQjNyaWF8ZW58MHx8MHx8fDA%3D"}
            nome={"João Santos"}
            idade={35}
            profissao={"Designer UX/UI"}
          />
        </div>

        <div className="profile-card">
          <Profile 
            foto={"https://img.cdndsgni.com/preview/12161304.jpg"}
            nome={"Mariana Silva"}
            idade={29}
            profissao={"Desenvolvedora Frontend"}
          />
        </div>

        <div className="profile-card">
          <Profile 
            foto={"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            nome={"Carlos Alberto"}
            idade={41}
            profissao={"Gerente de Projetos"}
          />
        </div>
      </div>
    </div>
  )
}