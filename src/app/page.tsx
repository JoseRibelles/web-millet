import { getStrapiData } from "../lib/strapi"; 

export default async function Inici()
 { const strapiData = await getStrapiData('/api/inici'); 
  
  const{ title, description, imageUrl } = strapiData.data 
  
  return ( 
  <main className="container mx-auto py-6">
     <h1 className="text-4xl font-bold">{title}</h1> 
     <p className="text-gray-600">{description}</p> 
     </main> 
 );
}