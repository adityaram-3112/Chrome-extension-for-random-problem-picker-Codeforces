

function getRandom(problems)
{
    if (!Array.isArray(problems) || problems.length === 0) {
        throw new Error("No problems available.");
      }
    const random_index=Math.floor(Math.random()*problems.length);
    return problems[random_index];
}

async function handleButtonClick() 
{
    try
    {
        const api=  await  fetch("https://codeforces.com/api/problemset.problems");
        const data= await api.json();
        const problems=data.result.problems;
        const random_problem=getRandom(problems);
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
