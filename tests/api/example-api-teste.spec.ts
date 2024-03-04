import { test, expect } from '@playwright/test';

const baseURL_API = 'https://reqres.in';

test('POST a USER', async ({ request }) => {
    const APIResponse = await request.post(baseURL_API + '/api/users', {
        data: {
            name: 'Morpheus',
            job: 'Leader',
            id: "579"
        }
    });

    console.log(APIResponse);
    expect(APIResponse.ok()).toBeTruthy();

    //Asserts:
    // expect(await APIResponse.json()).toContainEqual(expect.objectContaining({
    //     name: "Morpheus",
    //     job: "Leader",
    //     //id: "579",
    //     //createdAt: "2024-03-04T21:14:21.964Z"
    // }));
});

test('PUT a USER id=2', async ({ request }) => {
    const APIResponse = await request.fetch(baseURL_API + '/api/users/2', {
        method: 'PUT',
        data: {
            name: 'Morpheus',
            job: 'Leader',
        }
    });

    //loga a response:
    console.log(await APIResponse.json());

    //Assert:
    expect(APIResponse.ok()).toBeTruthy();
});

test('LIST USERS', async ({ request }) => {
    const APIResponse = await request.fetch(baseURL_API + '/api/users?page=2', {
        method: 'GET'
    });

    //console.log(APIResponse);

    //loga a response:
    console.log(await APIResponse.json());

    expect(APIResponse.ok()).toBeTruthy();
});

test('GET SINGLE USER', async ({ request }) => {
    const APIResponse = await request.fetch(baseURL_API + '/api/users/2', {
        method: 'GET'
    });

    //console.log(APIResponse);

    //loga a response:
    console.log(await APIResponse.json());

    expect(APIResponse.ok()).toBeTruthy();
});









// const REPO = 'test-repo-1';
// const USER = 'github-username';

// test('should create a bug report', async ({ request }) => {
//     const newIssue = await request.post(`https://api.github.com/repos/${USER}/${REPO}/issues`, {
//         data: {
//             title: '[Bug] report 1',
//             body: 'Bug description',
//         }
//     });
//     expect(newIssue.ok()).toBeTruthy();

//     const issues = await request.get(`https://api.github.com/repos/${USER}/${REPO}/issues`);
//     expect(issues.ok()).toBeTruthy();
//     expect(await issues.json()).toContainEqual(expect.objectContaining({
//         title: '[Bug] report 1',
//         body: 'Bug description'
//     }));
// });

// test('should create a feature request', async ({ request }) => {
//     const newIssue = await request.post(`https://api.github.com/repos/${USER}/${REPO}/issues`, {
//         data: {
//             title: '[Feature] request 1',
//             body: 'Feature description',
//         }
//     });
//     expect(newIssue.ok()).toBeTruthy();

//     const issues = await request.get(`https://api.github.com/repos/${USER}/${REPO}/issues`);
//     expect(issues.ok()).toBeTruthy();
//     expect(await issues.json()).toContainEqual(expect.objectContaining({
//         title: '[Feature] request 1',
//         body: 'Feature description'
//     }));
// });