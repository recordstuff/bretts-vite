import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import ErrorBoundary from './components/ErrorBoundary';
import { PleaseWait } from './components/PleaseWait';
import Users from './pages/Users';
import Settings from './pages/Settings';
import GridExample from './pages/GridExample';
import BaconIpsum from './pages/BaconIpsum';
import ExampleTwo from './pages/ExampleTwo';
import User from './pages/User';

const theme = createTheme({
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    paddingTop: '.9em',
                    paddingBottom: '.9em',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#121212',
                    },
                    '&.MuiTableRow-head': {
                        backgroundColor: '#1e1e1e',
                    },
                },
            },
        },
    },
    palette: {
        mode: 'dark'
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ErrorBoundary>
                <PleaseWait />
                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="gridexample" element={<GridExample />} />
                            <Route path="exampletwo" element={<ExampleTwo />} />
                            <Route path="baconipsum" element={<BaconIpsum />} />
                            <Route path="users" element={<Users />} />
                            <Route path="user/:id?" element={<User />} />       
                            <Route path="settings" element={<Settings />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </ThemeProvider>
    )
}

export default App
