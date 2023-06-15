import React from 'react'

const Test = () => {
    return (
        <>
            <div>
                <p className="text-blue-600 text-2xl">Typograghy</p>
            </div>

            <div class="flex flex-row gap-4">
                <div className="w-80 h-80 bg-slate-400">1</div>
                <div className="w-80 bg-slate-400">2</div>
                <div className="w-80 bg-slate-400">3</div>
            </div>

            <div class="flex flex-row-reverse gap-4">
                <div className="w-80 h-80 bg-slate-400">1
                </div>
                <div className="w-80 bg-slate-400">2</div>
                <div className="w-80 bg-slate-400">3</div>
            </div>
            {/* grid */}
            <p className='text-2xl'>Grid</p>
            <div class="grid grid-cols-3 gap-4">
                <div className="bg-slate-400 h-10 text-center">1</div>
                <div className="bg-slate-400 h-10">2</div>
                <div className="bg-slate-400 h-10">3</div>
            </div>
            {/* grid responsive  */}
            <p className='text-2xl'>Responsive grid</p>
            <div class="grid grid-cols-1 md:grid-cols-6 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                <div className="bg-slate-400 h-10">1</div>
                <div className="bg-slate-400 h-10">2</div>
                <div className="bg-slate-400 h-10">3</div>
                <div className="bg-slate-400 h-10">4</div>
                <div className="bg-slate-400 h-10">5</div>
                <div className="bg-slate-400 h-10">6</div>
            </div>

            {/* GRID SPANNING COLUMNS */}

            <p className='text-2xl'>grid spanning columns</p>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-success h-10">1</div>
                <div className="bg-success h-10">2</div>
                <div className="bg-success h-10">3</div>
                <div className="col-span-2 bg-error h-10">4</div>
                <div className="bg-error h-10">5</div>
                <div className="bg-warning h-10">6</div>
                <div className="col-span-2 bg-warning h-10">7</div>
            </div>

            <p className='text-2xl'>Font family</p>
            <p class="font-sans ...">
                The quick brown fox jumps over the lazy dog.
            </p>

            <p class="font-serif ...">
                The quick brown fox jumps over the lazy dog.
            </p>

            <p class="font-mono ...">
                The quick brown fox jumps over the lazy dog.
            </p>

            <p className='text-2xl'>Font size</p>
            <p class="text-xs ...">The quick brown fox ...</p>
            <p class="text-sm ...">The quick brown fox ...</p><p class="text-base ...">The quick brown fox ...</p><p class="text-lg ...">The quick brown fox ...</p><p class="text-xl ...">The quick brown fox ...</p><p class="text-2xl ...">The quick brown fox ...</p><p class="text-3xl ...">The quick brown fox ...</p><p class="text-4xl ...">The quick brown fox ...</p><p class="text-5xl ...">The quick brown fox ...</p><p class="text-6xl ...">The quick brown fox ...</p><p class="text-7xl ...">The quick brown fox ...</p><p class="text-8xl ...">The quick brown fox ...</p><p class="text-9xl ...">The quick brown fox ...</p>

            <p className='text-2xl'>background color</p>
            <button class="btn  bg-green-500 ...">Button</button>
            <button class="btn bg-green-500 hover:bg-green-800">Button</button>

            <p className='text-2xl'>background opacity</p>
            <div class="bg-indigo-600 bg-opacity-100 w-30 h-30">1</div>
            <div class="bg-indigo-600 bg-opacity-75 w-30 h-30">2</div>
            <div class="bg-indigo-600 bg-opacity-50 w-30 h-30">3</div>
            <div class="bg-indigo-600 bg-opacity-25 w-30 h-30">4</div>
            <div class="bg-indigo-600 bg-opacity-0 w-30 h-30">5</div>
        </>

    )
}

export default Test
