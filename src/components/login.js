export default function Login(){




    return (
       <form method="POST" action="login">
	<div>
		<label for="username">Username:</label>
		<input type="text" name="username" value="" />
	</div>
	<div>
		<label for="password">Password:</label> 
		<input type="password" name="password" value="" />
	</div>
	<div>
		<input type="submit" value="Login" />
	</div>
    </form>
    ) 
}