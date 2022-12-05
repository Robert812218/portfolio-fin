import React from "react";


export default function ElixirDesc() {
	const str1 = `iex> "Elixir" |> String.graphemes() |> Enum.frequencies()`;
        const str2 = `%{"E" => 1, "i" => 2, "l" => 1, "r" => 1, "x" => 1}`;


	return (
		<div>
			<h1>Elixir</h1>
			                        <p>Elixir is a dynamic, functional language for building scalable and maintainable applications.
</p>
                        <p>Elixir runs on the Erlang VM, known for creating low-latency, distributed, and fault-tolerant systems. These capabilities and Elixir tooling allow developers to be productive in several domains, such as web development, embedded software, data pipelines, and multimedia processing, across a wide range of industries.</p> 
                        <p>Here is a peek: </p>
                        <div>
                                <p>${str1}</p>
                                <p>${str2}</p>
                        </div>

		</div>	
	) 
}
