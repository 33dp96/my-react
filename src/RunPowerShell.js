import { PowerShell } from 'node-powershell'

function RunPowerShell() {
    const ps = new PowerShell({
        executableOptions: {
            '-ExecutionPolicy': 'Bypass',
            '-NoProfile': true,
        },
    });

    const scriptCommand = PowerShell.command`Get-Service`;
    const result = ps.invoke(scriptCommand);
    console.log(result);

    return (
        <>
            {result}
        </>
    )
}

export default RunPowerShell
