const dataFood = [
    {
        id:1,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZJGN8LFJYMGEX/hero/70d838c533b548ccae1678ffbda02019_1590733306805280271.jpeg",
        title:"Bếp Mẹ Thỏ - Bún Miến Ngan & Phở Trộn",
        cate : "Cà phê - Trà - Sinh tố - Nước ép",
        star : 3.4,
        time : 25,
        street : 0.7,
        detail:"SUPERBOSS20 Giảm 30K đơn 40K.Nhập BOSSXANHLA2 giảm 25K.Giảm 35K mã BOSS35.Giảm 25K mã BOSS25K.Giảm 50% mã BOSS20.",
        cost:10
    },
    {
        id:2,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C2DYBAJ3ANMHBE/hero/8c2a64985eea44d0b5030c95454c5059_1614573052607432483.png",
        title:"Mr.Potato & More",
        cate : "Gà Rán - Burger",
        star : 4.2,
        time : 25,
        street : 0.6,
        detail:"SUPERBOSS20 Giảm 30K đơn 40K.Nhập BOSSXANHLA4 giảm 25K.Giảm 50% mã BOSS20.Giảm 15K ship FREESHIP15.",
        cost: 100
    },
    {
        id:3,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C2WANTVARRBYVN/hero/3fbdda5ec64a43659050bbc0ac0c4fe1_1643937392275101697.png",
        title:"Cô Nguyệt Ẩm Thực & Quà Vặt Siêu Ngon - Ngọc Hà",
        cate : "Ăn vặt",
        star : 3.3,
        time : 20,
        street : 1.5,
        detail:"Giảm 50% mã SIEUSALE50.Giảm 70K đơn 150K mã SIEUSALE70.SUPERBOSS20 Giảm 30K đơn 40K.Nhập BOSSXANHLA4 giảm 25K",
        cost: 50
    },
    {
        id:4,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C3EJA25GRXLWGJ/hero/1b311481759a4cbc8cc3b4083b21c139_1649666028523832076.jpg",
        title:"Misa - xiên que - trà sữa - đồ ăn vặt",
        cate : "Trà sữa - Ăn vặt",
        star : 4.5,
        time : 25,
        street : 1.9,
        detail:"Nhập QUANNGON440 giảm 40K đơn bất kỳ.",
        cost:70
    },
    {
        id:5,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZDXJBUCEABALN/hero/5a3715f769a143f9a4a186f31782ea96_1614222414747819876.jpeg",
        title:"Dung - Nước Ép trái cây",
        cate : "Cà phê - Trà - Sinh tố - Nước ép",
        star : 2.6,
        time : 20,
        street : 1.5,
        detail:"Giảm 50% mã CHIEUDAI50.Giảm 15K mã FREESHIPHN.Giảm 35K mã GF40KHN.Giảm 45K mã GF50KHN.",
        cost:80
    },
    {
        id:6,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZLCAX6HNNAEGN/hero/3336a826c4404a13b36b3ae71c982462_1614757312435106949.jpeg",
        title:"Cô Liễu -  Phở,Bún,Miến",
        cate : "Bún - Phở - Cháo",
        star : 4.7,
        time : 20,
        street : 1.9,
        detail:"Giảm 50% mã CHIEUDAI50.Giảm 15K mã FREESHIPHN.Giảm 35K mã GF40KHN.Giảm 45K mã GF50KHN.",
        cost:30
    },
    {
        id:7,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C26DRPVXAFNBCE/hero/8b27d2fff7174e0fa0ddf7c4ca31de75_1649654568044757398.jpg",
        title:"Gugsumi - Bún Trộn Nam Bộ - Phan Văn Trị",
        cate : "Bún - phở - Cháo",
        star : 5,
        time : 20,
        street : 0.4,
        detail:"Giảm 50% mã SIEUSALE50.Giảm 70K đơn 150K mã SIEUSALE70.SUPERBOSS20 Giảm 30K đơn 40K.Nhập BOSSXANHLA4 giảm 25K",
        cost:50
    },
    {
        id:8,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZEGTTC1N72ESA/hero/dba9aea2c4d941459b334391205a886c_1614676746859134231.jpeg",
        title:"Shop Be - Đồ Ăn Vặt online",
        cate : "Ăn vặt",
        star : 4.5,
        time : 20,
        street : 1.2,
        detail:"SUPERBOSS20 Giảm 30K đơn 40K.Nhập BOSSXANHLA4 giảm 25K.Giảm 50K mã BOSS50.Giảm 40K mã BOSS40.Giảm 30K mã BOSS30.",
        cost:90
    },
    {
        id:9,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZLYUB3UV7UTRX/hero/ca70599c48e540d2bab74efda3e581b0_1614573164020592829.png",
        title:"Bánh Mì Que (Bếp Mẹ Sóc)",
        cate : "Bánh Mì - Xôi",
        star : 5,
        time : 20,
        street : 1.2,
        detail:"SUPERBOSS20 Giảm 30K đơn 40K.Nhập BOSSXANHLA4 giảm 25K.Giảm 50K mã BOSS50.Giảm 40K mã BOSS40.Giảm 30K mã BOSS30.",
        cost:120
    },
    {
        id:10,
        image:"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/VNGFVN000004z8/hero/c3d67cdee91848ae98aea21edf8825dd_1648627128057512895.png",
        title:"Lotteria - Khâm Thiên",
        cate : "Gà Rán - Burger",
        star : 4.4,
        time : 20,
        street : 1.5,
        detail:"Ưu đãi lotteria.",
        cost:100
    },
]
export default dataFood;