import supabase from "../utils/supabase"
import { TypedRequestBody, TypedRequestQuery } from "../types"

export const createUser = async function (req: TypedRequestBody<{user_id: string, password: string, q: string, email: string}>, res) {
  console.log(res)
    const { data, error } = await supabase
        .from('users')
        .upsert({ 
            username:req.body.user_id,
          password: req.body.password,
            created_at: ((new Date()).toISOString()).toLocaleString()
        })
        .select()

    if (error) {
        res.send(500)
    } else {
        res.send(data[0])
    }
}

export const searchUsers = async function (req: TypedRequestQuery<{user_id: string, q: string}>, res) {

    let query = supabase
      .from('users')
      .select();
console.log(req.query);
    if (req.query.q) {
        
        query = query.like('username', `%${req.query.q}%`)
    }

    query = query.neq('id', req.query.user_id)
    .limit(50);

    const { data, error } = await query;

    if (error) {
        res.send(error)
    } else {
        res.send(data)
    }
}
