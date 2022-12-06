import React from "react";


export default function ElixirDesc() {
	const str1 = `iex> "Elixir" |> String.graphemes() |> Enum.frequencies()`;
        const str2 = `%{"E" => 1, "i" => 2, "l" => 1, "r" => 1, "x" => 1}`;

	const str3 = `Phoenix is a web development framework written in the functional programming language Elixir. Phoenix uses a server-side model–view–controller (MVC) pattern.[2] Based on the Plug library, and ultimately the Cowboy Erlang framework, it was developed to provide highly performant and scalable web applications. In addition to the request/response functionality provided by the underlying Cowboy server,[3] Phoenix provides soft realtime communication to external clients through WebSockets or long polling using its language agnostic channels feature.[4]`;
	const str4 = `Two notable features of Phoenix are LiveView and HEEx. LiveView provides real-time user experiences with server-rendered HTML.[5] HEEx is Phoenix's templating language.[6]`;


	return (
		<div>
			<h1>Elixir</h1>
				<h2>Overview</h2>
			        	<p>Elixir is a dynamic, functional language for building scalable and maintainable applications.
</p>
                        		<p>Elixir runs on the Erlang VM, known for creating low-latency, distributed, and fault-tolerant systems. These capabilities and Elixir tooling allow developers to be productive in several domains, such as web development, embedded software, data pipelines, and multimedia processing, across a wide range of industries.</p> 
                        		<p>Here is a peek: </p>
                        		<div>
                                		<p>${str1}</p>
                                		<p>${str2}</p>
                        		</div>
				
				<h2>Phoenix Framework</h2>
					<p>${str3}</p>
					<p>${str4}</p>
		</div>	
	) 
}
