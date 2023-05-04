export function Redirect(role,navigate){
    if (role==='seller'){
      return navigate('/seller')
    }else if (role==="provider"){
      return navigate('/provider')
    }
  }