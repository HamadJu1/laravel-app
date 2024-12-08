```blade
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="container mx-auto mt-10 max-w-md p-4 border rounded shadow-lg">
        <h1 class="text-2xl font-bold text-center mb-4">Login</h1>

        @if(session('error'))
            <div class="bg-red-100 text-red-600 px-4 py-2 rounded mb-4">
                {{ session('error') }}
            </div>
        @endif

        @if($errors->any())
            <div class="bg-red-100 text-red-600 px-4 py-2 rounded mb-4">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ route('login') }}" method="POST">
            @csrf

            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="w-full px-3 py-2 border rounded" 
                    value="{{ old('email') }}" 
                    required 
                    autofocus
                >
            </div>

            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    class="w-full px-3 py-2 border rounded" 
                    required
                >
            </div>

            <div class="flex items-center justify-between mb-4">
                <div>
                    <input 
                        type="checkbox" 
                        id="remember" 
                        name="remember" 
                        class="mr-1"
                    >
                    <label for="remember" class="text-gray-700">Remember Me</label>
                </div>

                <div>
                    <a href="{{ route('password.request') }}" class="text-blue-500 hover:underline">
                        Forgot Password?
                    </a>
                </div>
            </div>

            <button 
                type="submit" 
                class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Login
            </button>
        </form>
    </div>
</body>
</html>
```