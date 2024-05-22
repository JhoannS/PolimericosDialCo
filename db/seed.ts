import { db, User, Rol } from 'astro:db';

export default async function(){
	await db.insert(Rol).values([
		{ 
		rolId: 1 ,
		rolName: "Administrador",
		}
	  ])

 	await db.insert(User).values([
     { 
 	userId: 1 ,
     name: "Jhoann Zamudio",
     email: "Sebastianzamudio2004@gmail.com",
     password: "123456789",
 	created: new Date(),
 	rol_id: 1
 	}
   ])
  
}