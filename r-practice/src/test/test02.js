import React from 'react';

function Person (){
  let state = {
      name: "sunrise",
      age: 23,
      friends: [
          "victoria",
          "daniel",
          "hanna"
      ]
  }

  let {name , age, friends} = state
  let friendsInfo = friends.join(' ')
  function displayInfo(){
    alert(
        `
        *신상정보*
        -----------------------
        이름 : ${name}
        나이 : ${age}
        친구 : ${friendsInfo}
        `
        )
  }


    return (
    	<>
            <button onClick={displayInfo}>신상정보 확인하기</button>
        </>
    )

}

export default Person;