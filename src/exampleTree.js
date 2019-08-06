const exampleTree = [
    {
      name: '택시 불러줘',
      _collapsed: false,
      children: [
        {
          name: "어디까지 갈 예정이야?",
          children: [
            {
              name: '나 대전역까지 갈거야',
              children: [
                {
                  name: '알았어! 가능한 택시가 있는지 알아볼게',
                  children: []
                },
                {
                  name: '언제 출발할 예정이야?',
                  children: []
                },
                {
                  name: '혹시 몇 명이 탈거야?',
                  children: []
                },
                {
                  name: '언제 필요해?',
                  children: []
                }
              ]
            }
          ]
        },
        {
          name: '현재 위치 알려줘',
          children: [],
        }
      ]
    }
  ];

export default exampleTree;