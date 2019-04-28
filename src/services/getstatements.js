import axios from 'axios';
const getStatements = async(id) => {
    const userId= id;
    const url = `http://localhost:11235/statement/all/${userId}`;
    const {data} = await axios.get(url);
    const statements = []
    data.data.forEach(async(element) => {
        let expenses =[]
        const obj = {name:element.name, id:element.id, created_at:element.created_at, budget:element.budget,};
        const response = await axios.get(`http://localhost:11235/statement/detailed/${element.id}`);
        expenses =response.data.data;
        obj.expenses = expenses;
        statements.push(obj)
        });
        
      return statements;
}

export default getStatements;