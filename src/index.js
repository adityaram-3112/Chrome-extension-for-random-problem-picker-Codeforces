

function getRandom(problems,from,to)
{
    if (!Array.isArray(problems) || problems.length === 0) {
        throw new Error("No problems available.");
      }
      var random_index;
      while(1)
      {
        random_index=Math.floor(Math.random()*problems.length);
        const rating=problems[random_index].rating;
        if(rating>=from && rating<=to)
        {
            break;
        }
      }
    return problems[random_index];
}

async function handleButtonClick() 
{
    try
    {
        const api=  await  fetch("https://codeforces.com/api/problemset.problems");
        const data= await api.json();
        const problems=data.result.problems;
        const from=document.getElementById('from').value;
        const to=document.getElementById('to').value;
        console.log(from);
        console.log(to);
        const random_problem=getRandom(problems,from,to);
        // const random_problem=problems[0];
        const id=random_problem.contestId;
        const index=random_problem.index;
        const area=document.getElementById('area');
        const link=document.createElement('a');
        const linklist=document.createElement('li');
        link.href=`https://codeforces.com/problemset/problem/${id}/${index}`
        link.textContent="Click here for a random problem";
        link.target='_blank';
        linklist.append(link);
        area.appendChild(linklist);


    }
    catch(error)
    {
        console.error("Error:",error.message);
        document.body.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }

}

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('random');
    button.addEventListener('click', handleButtonClick);
});
