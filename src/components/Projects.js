import React, { useEffect } from 'react';
import Reverb from './githubProjects/Reverb';
import Scheduler from './githubProjects/Scheduler';
import LightBNB from './githubProjects/LightBNB';
import Memorizo from './githubProjects/Memorizo';
import Tinyapp from './githubProjects/Tinyapp';
import SnekMultiplayer from './githubProjects/SnekMultiplayer';
import AdventOfCode2022 from './githubProjects/AdventOfCode2022';


function ProjectList() {
	return (
                        <div class="flex">
                                <ul>
                                        <li>
                                                <Reverb />
                                        </li>
                                        <li>
                                                <Scheduler />
                                        </li>   
                                        <li>
                                                <LightBNB />
                                        </li>
                                        <li>
                                                <Memorizo />
                                        </li>   
                                        <li>
                                                <Tinyapp />
                                        </li>
                                        <li>
                                                <SnekMultiplayer />
                                        </li>
                                        <li>
                                                <AdventOfCode2022 />
                                        </li>
                                </ul>
                        </div>

	);
}

export default function Projects() {

	return (

<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Portfolio</h1>

        <div class="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div class="lg:mx-12">
                <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

                <div class="mt-4 space-y-4 lg:mt-8">
                    <a href="#" class="block text-blue-500 dark:text-blue-400 hover:underline">Web design</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">App design</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">Branding</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">Animation</a>
                </div>
            </div>

	 	<ProjectList />
            <div class="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                        <img class="object-cover w-full rounded-lg h-96 "
                            src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                            alt=""></img>
                        <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                            collections</h2>
                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                    </div>

                    <div>
                        <img class="object-cover w-full rounded-lg h-96 "
                            src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt=""></img>
                        <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                            collections</h2>
                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                    </div>

                    <div>
                        <img class="object-cover w-full rounded-lg h-96 "
                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""></img>
                        <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile
                            mockup</h2>
                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

	);

}

