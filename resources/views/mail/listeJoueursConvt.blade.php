
<!DOCTYPE html>
<html>
<head>
	<title>Match Information</title>
	<style>
		* {
			box-sizing: border-box;
			font-family: Arial, sans-serif;
		}
		body {
			margin: 0;
			padding: 0;
			background-color: #f5f5f5;
		}
		.container {
			max-width: 600px;
			margin: 0 auto;
			background-color: #ffffff;
			padding: 20px;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		}
		h1, h2 {
			margin-top: 0;
			text-align: center;
			color: #222222;
		}
		table {
			width: 100%;
			border-collapse: collapse;
			margin-bottom: 20px;
		}
		th, td {
			padding: 10px;
			text-align: left;
			border-bottom: 1px solid #dddddd;
			color: #222222;
		}
		th {
			font-weight: bold;
		}
		td:first-child {
			font-weight: bold;
			color: #555555;
		}
		.joueurs {
			margin: 20px 0;
		}
		.joueur {
			display: flex;
			align-items: center;
			padding: 10px;
			border: 1px solid #dddddd;
			margin-bottom: 10px;
		}
		.joueur img {
			width: 50px;
			height: 50px;
			margin-right: 10px;
			border-radius: 50%;
			object-fit: cover;
		}
		.joueur h3, .joueur p {
			margin: 0;
			color: #222222;
		}
		.joueur h3 {
			font-size: 1.2rem;
		}
		.joueur p {
			font-size: 1rem;
		}
	</style>
</head>
<body>
	<div class="container">
		<h1>Match Information</h1>
		<table>
			<tr>
				<th>Date:</th>
				<td>{{ $matche->date }}</td>
			</tr>
			<tr>
				<th>Lieu:</th>
				<td>{{$matche->lieu}}</td>
			</tr>
            @if ($matche->championat)
              <tr>
				<th>Championnat:</th>
				<td>{{$matche->championat}}</td>
			</tr>  
            @endif
			
			<tr>
				<th>Equipe adversaire:</th>
				<td>{{$matche->adversaire}}</td>
			</tr>
		</table>

		<h2>Liste des joueurs:</h2>
		<div class="joueurs">
			<table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Poste</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($joueurs as $joueur)
                        <tr>
                            <td>{{ $joueur->nom }}</td>
                            <td>{{ $joueur->prenom }}</td>
                            <td>{{ $joueur->poste }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
		</div>
	</div>
</body>
</html>