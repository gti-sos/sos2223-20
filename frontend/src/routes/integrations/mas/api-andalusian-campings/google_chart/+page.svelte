<script>
    import { onMount } from "svelte";

     //proxy let API = "http://localhost:12345/api/v2/integrations/mas/api-andalusian-campings/api-sos/proxy";
    let API = "http://localhost:12345/api/v2/campings";
    let data = [];

    async function getData() {
        const response = await fetch(API);
        data = await response.json();
        console.log(data);
    }

    function getDataAlmeria() {
        const province = "ALMERÍA";
        let sumCampingPlaces = 0;
        data.forEach((item) => {
            const itemProvince = item.state;

            if (itemProvince === province) {
                sumCampingPlaces += item.camping_places;
            }
        });
        console.log(sumCampingPlaces);
        return sumCampingPlaces;
    }

    function getDataMalaga() {
        const province = "MÁLAGA";
        let sumCampingPlaces = 0;
        data.forEach((item) => {
            const itemProvince = item.state;

            if (itemProvince === province) {
                sumCampingPlaces += item.camping_places;
            }
        });
        console.log(sumCampingPlaces);
        return sumCampingPlaces;
    }

    function getDataSevilla() {
        const province = "SEVILLA";
        let sumCampingPlaces = 0;
        data.forEach((item) => {
            const itemProvince = item.state;

            if (itemProvince === province) {
                sumCampingPlaces += item.camping_places;
            }
        });
        console.log(sumCampingPlaces);
        return sumCampingPlaces;
    }

    function getDataCadiz() {
        const province = "CÁDIZ";
        let sumCampingPlaces = 0;
        data.forEach((item) => {
            const itemProvince = item.state;

            if (itemProvince === province) {
                sumCampingPlaces += item.camping_places;
            }
        });
        console.log(sumCampingPlaces);
        return sumCampingPlaces;
    }

    function getDataCordoba() {
        const province = "CÓRDOBA";
        let sumCampingPlaces = 0;
        data.forEach((item) => {
            const itemProvince = item.state;

            if (itemProvince === province) {
                sumCampingPlaces += item.camping_places;
            }
        });
        console.log(sumCampingPlaces);
        return sumCampingPlaces;
    }

    function getDataGranada() {
        const province = "GRANADA";
        let sumCampingPlaces = 0;
        data.forEach((item) => {
            const itemProvince = item.state;

            if (itemProvince === province) {
                sumCampingPlaces += item.camping_places;
            }
        });
        console.log(sumCampingPlaces);
        return sumCampingPlaces;
    }

    function getDataHuelva() {
        const province = "HUELVA";
        let sumCampingPlaces = 0;
        data.forEach((item) => {
            const itemProvince = item.state;

            if (itemProvince === province) {
                sumCampingPlaces += item.camping_places;
            }
        });
        console.log(sumCampingPlaces);
        return sumCampingPlaces;
    }

    function getDataJaen() {
        const province = "JAÉN";
        let sumCampingPlaces = 0;
        data.forEach((item) => {
            const itemProvince = item.state;

            if (itemProvince === province) {
                sumCampingPlaces += item.camping_places;
            }
        });
        console.log(sumCampingPlaces);
        return sumCampingPlaces;
    }

    onMount(async () => {
        await Promise.all([getData()]);
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var pieData = google.visualization.arrayToDataTable([
                ["Provincia", "Camping Places"],
                ["Almería", getDataAlmeria()],
                ["Cádiz", getDataCadiz()],
                ["Córdoba", getDataCordoba()],
                ["Granada", getDataGranada()],
                ["Jaén", getDataJaen()],
                ["Huelva", getDataHuelva()],
                ["Málaga", getDataMalaga()],
                ["Sevilla", getDataSevilla()],
            ]);

            var pieOptions = {
                title: "Campings in Andalucia (Pie Chart)",
                is3D: true,
            };

            var columnData = google.visualization.arrayToDataTable([
                ["Provincia", "Plazas de Camping", { role: "style" }],
                ["Almería", getDataAlmeria(), "gold"],
                ["Cádiz", getDataCadiz(), "silver"],
                ["Córdoba", getDataCordoba(),"red"],
                ["Granada", getDataGranada(),"blue"],
                ["Jaén", getDataJaen(),"yellow"],
                ["Huelva", getDataHuelva(),"green"],
                ["Málaga", getDataMalaga(),"orange"],
                ["Sevilla", getDataSevilla(),"purple"],
            ]);
            
            var columnOptions = {
                title: "Plazas de Camping por Provincias (Column Chart)",
                width: 600,
                height: 400,
                bar: { groupWidth: "95%" },
                legend: { position: "none" },
            };

            var pieChart = new google.visualization.PieChart(
                document.getElementById("piechart_3d")
            );
            pieChart.draw(pieData, pieOptions);

            var columnChart = new google.visualization.ColumnChart(
                document.getElementById("columnchart_values")
            );
            columnChart.draw(columnData, columnOptions);
        }
    });
</script>

<svelte:head>
    <script src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<div id="piechart_3d" style="width: 1500px; height: 600px;" />
<div id="columnchart_values" style="width: 1500px; height: 900px;" />
